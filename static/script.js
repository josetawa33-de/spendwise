document.addEventListener("DOMContentLoaded", () => {
  const views = {
    dashboard: `
      <!-- Metric Cards Grid -->
      <section class="cards-grid">
        <div class="metric-card">
          <div class="card-top">
            <div class="card-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>
            </div>
            <span class="more-btn">⋮</span>
          </div>
          <div class="label">Total Balance</div>
          <div class="value">$25,840.50</div>
          <div class="badge positive">↑ 4.50% <span class="sub-text">vs last month</span></div>
        </div>

        <div class="metric-card">
          <div class="card-top">
            <div class="card-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <span class="more-btn">⋮</span>
          </div>
          <div class="label">Monthly Expenses</div>
          <div class="value">$4,720.75</div>
          <div class="badge negative">↓ 2.87% <span class="sub-text">vs last month</span></div>
        </div>

        <div class="metric-card">
          <div class="card-top">
            <div class="card-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <span class="more-btn">⋮</span>
          </div>
          <div class="label">Savings Goal</div>
          <div class="value">$20,000</div>
          <div class="badge positive">↑ 65% <span class="sub-text">Achieved ($13,000)</span></div>
        </div>

        <div class="metric-card">
          <div class="card-top">
            <div class="card-icon-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            </div>
            <span class="more-btn">⋮</span>
          </div>
          <div class="label">Next Payment Due</div>
          <div class="value">$1,240.00</div>
          <div class="badge negative">↓ -03 <span class="sub-text">Days Left</span></div>
        </div>
      </section>

      <!-- Main Dashboard Grid -->
      <section class="dashboard-grid">
        <div class="grid-left">
          <div class="panel">
            <div class="panel-header">
              <h3 class="panel-title">Finance Statistics</h3>
              <select class="select-dropdown"><option>This Year</option></select>
            </div>
            <div class="chart-box" style="height: 220px;">
              <canvas id="financeBarChart"></canvas>
            </div>
          </div>
        </div>

        <div class="grid-right">
          <div class="panel">
            <div class="panel-header">
              <h3 class="panel-title">Spending Breakdown</h3>
            </div>
            <div class="donut-layout">
              <div class="chart-box" style="height: 150px;">
                <canvas id="spendingPieChart"></canvas>
              </div>
              <div class="category-legend">
                <div class="legend-item">
                  <span class="legend-name"><span class="dot" style="background:#0039a6;"></span>Food</span>
                  <strong>45%</strong>
                </div>
                <div class="legend-item">
                  <span class="legend-name"><span class="dot" style="background:#0066ff;"></span>Utilities</span>
                  <strong>35%</strong>
                </div>
                <div class="legend-item">
                  <span class="legend-name"><span class="dot" style="background:#80b3ff;"></span>Entertainment</span>
                  <strong>20%</strong>
                </div>
              </div>
            </div>
          </div>

          <div class="panel">
            <div class="panel-header">
              <h3 class="panel-title">Recent Transactions</h3>
            </div>
            <div class="tx-list">
              <div class="tx-row">
                <div class="tx-left">
                  <div class="tx-icon-bg">☕</div>
                  <div class="tx-details">
                    <div class="tx-name">Starbucks</div>
                    <div class="tx-sub">Coffee Bill</div>
                  </div>
                </div>
                <div class="tx-amt">$5.75</div>
                <div class="tx-date">16th Nov</div>
              </div>

              <div class="tx-row">
                <div class="tx-left">
                  <div class="tx-icon-bg" style="color:red;">N</div>
                  <div class="tx-details">
                    <div class="tx-name">Netflix</div>
                    <div class="tx-sub">Subscription</div>
                  </div>
                </div>
                <div class="tx-amt">$15.00</div>
                <div class="tx-date">15th Nov</div>
              </div>

              <div class="tx-row">
                <div class="tx-left">
                  <div class="tx-icon-bg" style="color:purple;">F</div>
                  <div class="tx-details">
                    <div class="tx-name">Figma</div>
                    <div class="tx-sub">Subscription</div>
                  </div>
                </div>
                <div class="tx-amt">$45.00</div>
                <div class="tx-date">14th Nov</div>
              </div>

              <div class="tx-row">
                <div class="tx-left">
                  <div class="tx-icon-bg" style="color:green;">S</div>
                  <div class="tx-details">
                    <div class="tx-name">Slack</div>
                    <div class="tx-sub">Subscription</div>
                  </div>
                </div>
                <div class="tx-amt">$29.99</div>
                <div class="tx-date">12th Nov</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `,
    accounts: `<div class="panel"><h3>Accounts View</h3><p style="color: var(--text-secondary); margin-top:8px;">Manage your bank accounts and credit cards here.</p></div>`,
    budgeting: `<div class="panel"><h3>Budgeting</h3><p style="color: var(--text-secondary); margin-top:8px;">Set up monthly spending limits.</p></div>`,
    transactions: `<div class="panel"><h3>All Transactions</h3><p style="color: var(--text-secondary); margin-top:8px;">Complete historical transaction log.</p></div>`,
    reports: `<div class="panel"><h3>Financial Reports</h3><p style="color: var(--text-secondary); margin-top:8px;">Download custom CSV/PDF reports.</p></div>`,
    support: `<div class="panel"><h3>Help & Support</h3><p style="color: var(--text-secondary); margin-top:8px;">Contact customer assistance 24/7.</p></div>`,
    settings: `<div class="panel"><h3>Settings</h3><p style="color: var(--text-secondary); margin-top:8px;">Update profile and preferences.</p></div>`
  };

  const appView = document.getElementById("app-view");
  const navItems = document.querySelectorAll(".nav-item");

  function renderView(viewName) {
    appView.innerHTML = views[viewName] || views["dashboard"];
    if (viewName === "dashboard") {
      initCharts();
    }
  }

  function initCharts() {
    const barEl = document.getElementById("financeBarChart");
    const pieEl = document.getElementById("spendingPieChart");
    if (!barEl || !pieEl) return;

    // Bar Chart
    new Chart(barEl.getContext("2d"), {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Income",
            data: [14, 18, 12, 16, 15, 22, 17, 20, 16, 8, 14, 0],
            backgroundColor: "#0066ff",
            borderRadius: 4
          },
          {
            label: "Expense",
            data: [-6, -8, -5, -7, -9, -11, -8, -10, -7, -4, -6, 0],
            backgroundColor: "#b3d1ff",
            borderRadius: 4
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { stacked: true, grid: { display: false } },
          y: { stacked: true, grid: { color: "#f1f5f9" } }
        }
      }
    });

    // Donut Chart
    new Chart(pieEl.getContext("2d"), {
      type: "doughnut",
      data: {
        datasets: [{
          data: [45, 35, 20],
          backgroundColor: ["#0039a6", "#0066ff", "#80b3ff"],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "70%",
        plugins: { legend: { display: false } }
      }
    });
  }

  // Navigation Click Handler
  navItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      navItems.forEach(n => n.classList.remove("active"));
      item.classList.add("active");
      const target = item.getAttribute("data-target");
      renderView(target);
    });
  });

  // Initial Load
  renderView("dashboard");
});