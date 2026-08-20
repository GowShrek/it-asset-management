/**
 * Nexus IT Asset Management (ITAM v3.2 Modular Enterprise)
 * Shared JavaScript Controller for Multi-Page Modular Web Application
 */

const STORAGE_KEYS = {
  ASSETS: 'nexus_itam_assets_v3',
  LICENSES: 'nexus_itam_licenses_v3',
  MAINTENANCE: 'nexus_itam_maint_v3',
  AUDIT: 'nexus_itam_audit_v3',
  THEME: 'nexus_itam_theme'
};

const DEFAULT_ASSETS = [
  {
    id: 'ast_101',
    tag: 'AST-LAP-001',
    name: 'MacBook Pro M2 Max 16"',
    category: 'Laptop',
    serial: 'C02G1928MD6R',
    user: 'Nguyễn Trần Anh (Lead Dev)',
    department: 'Software Dev',
    status: 'In Use',
    cost: 3499,
    purchaseDate: '2024-01-15',
    warrantyDate: '2027-01-15',
    notes: '32GB RAM, 1TB SSD. Bàn giao kèm Sạc Apple 140W.'
  },
  {
    id: 'ast_102',
    tag: 'AST-LAP-002',
    name: 'Dell XPS 15 9530',
    category: 'Laptop',
    serial: 'DLXPS9530-9921',
    user: 'Lê Hoàng Nam (Designer)',
    department: 'Marketing',
    status: 'In Use',
    cost: 2199,
    purchaseDate: '2024-06-20',
    warrantyDate: '2027-06-20',
    notes: 'Core i9, 32GB RAM, RTX 4060.'
  },
  {
    id: 'ast_103',
    tag: 'AST-SRV-001',
    name: 'Dell PowerEdge R750 Server',
    category: 'Server',
    serial: 'PER750-SRV-8812',
    user: 'Hệ Thống Server Rack A1',
    department: 'IT System',
    status: 'In Use',
    cost: 8500,
    purchaseDate: '2023-03-10',
    warrantyDate: '2028-03-10',
    notes: 'Dual Xeon Gold, 128GB RAM, 8x2TB NVMe Enterprise RAID 10.'
  },
  {
    id: 'ast_104',
    tag: 'AST-NET-001',
    name: 'Cisco Catalyst 9300 48-Port Switch',
    category: 'Networking',
    serial: 'FOC2419L0AB',
    user: 'Tủ Mạng Core Floor 3',
    department: 'IT System',
    status: 'In Use',
    cost: 4200,
    purchaseDate: '2023-01-05',
    warrantyDate: '2028-01-05',
    notes: 'PoE+ Switch mạng lõi văn phòng.'
  },
  {
    id: 'ast_105',
    tag: 'AST-MON-001',
    name: 'Dell UltraSharp U2723QE 4K',
    category: 'Monitor',
    serial: 'CN08821M-MON1',
    user: 'Phạm Minh Tuấn (Dev)',
    department: 'Software Dev',
    status: 'In Use',
    cost: 620,
    purchaseDate: '2025-01-01',
    warrantyDate: '2028-01-01',
    notes: 'Màn hình 27-inch 4K Type-C PD 90W.'
  },
  {
    id: 'ast_106',
    tag: 'AST-LAP-003',
    name: 'Lenovo ThinkPad X1 Carbon Gen 11',
    category: 'Laptop',
    serial: 'PF-49102X1',
    user: 'Trần Thị Thảo (HR Manager)',
    department: 'HR & Admin',
    status: 'In Use',
    cost: 1850,
    purchaseDate: '2024-04-14',
    warrantyDate: '2027-04-14',
    notes: 'Core i7, 16GB RAM, 512GB SSD.'
  },
  {
    id: 'ast_107',
    tag: 'AST-LAP-004',
    name: 'MacBook Air M2 13"',
    category: 'Laptop',
    serial: 'C02H8812MBA',
    user: 'Chưa Gán (Kho IT)',
    department: 'Stock Room',
    status: 'Available',
    cost: 1199,
    purchaseDate: '2025-02-10',
    warrantyDate: '2026-02-10',
    notes: '8GB RAM, 256GB SSD. Sẵn sàng cấp cho nhân viên mới.'
  },
  {
    id: 'ast_108',
    tag: 'AST-MON-002',
    name: 'LG UltraFine 27UN880 Ergonomic',
    category: 'Monitor',
    serial: 'LG27-8812399',
    user: 'Chưa Gán (Kho IT)',
    department: 'Stock Room',
    status: 'Available',
    cost: 480,
    purchaseDate: '2025-03-22',
    warrantyDate: '2027-03-22',
    notes: 'Màn hình chân Ergo arm xoay 360.'
  },
  {
    id: 'ast_109',
    tag: 'AST-DES-001',
    name: 'Custom Workstation RTX 4090 AI Core',
    category: 'Desktop',
    serial: 'WS-AI-2024-99',
    user: 'Đỗ Hữu Đức (AI Engineer)',
    department: 'Software Dev',
    status: 'Maintenance',
    cost: 4500,
    purchaseDate: '2024-09-01',
    warrantyDate: '2027-09-01',
    notes: 'Đang bảo hành do lỗi nguồn Nguồn Corsair 1200W.'
  },
  {
    id: 'ast_110',
    tag: 'AST-MOB-001',
    name: 'iPhone 15 Pro 256GB',
    category: 'Mobile',
    serial: 'DN6H7781IP15',
    user: 'Vũ Quốc Huy (CEO Office)',
    department: 'HR & Admin',
    status: 'In Use',
    cost: 1099,
    purchaseDate: '2024-10-10',
    warrantyDate: '2025-10-10',
    notes: 'Thiết bị test app di động doanh nghiệp.'
  }
];

const DEFAULT_LICENSES = [
  {
    id: 'lic_201',
    name: 'Microsoft 365 Enterprise E5',
    vendor: 'Microsoft Corporation',
    totalSeats: 100,
    usedSeats: 82,
    cost: 24000,
    expiry: '2026-12-31',
    key: 'MS365-E5-ENTERPRISE-TENANT-GLOBAL'
  },
  {
    id: 'lic_202',
    name: 'Adobe Creative Cloud All Apps',
    vendor: 'Adobe Systems',
    totalSeats: 15,
    usedSeats: 14,
    cost: 10800,
    expiry: '2026-09-15',
    key: 'ADBE-CC-ENT-PROD-2026'
  },
  {
    id: 'lic_203',
    name: 'Figma Organization Plan',
    vendor: 'Figma Inc',
    totalSeats: 25,
    usedSeats: 20,
    cost: 7500,
    expiry: '2027-01-10',
    key: 'FIGMA-ORG-TENANT-NEXUS'
  },
  {
    id: 'lic_204',
    name: 'JetBrains All Products Pack',
    vendor: 'JetBrains',
    totalSeats: 30,
    usedSeats: 28,
    cost: 6200,
    expiry: '2026-11-01',
    key: 'JB-ALL-DEV-SEATS-PACK'
  }
];

const DEFAULT_MAINTENANCE = [
  {
    id: 'mnt_301',
    assetTag: 'AST-DES-001',
    type: 'Hardware Repair',
    description: 'Thay thế bộ nguồn Corsair 1200W bị sụt áp.',
    date: '2026-08-02',
    cost: 250,
    status: 'In Progress'
  },
  {
    id: 'mnt_302',
    assetTag: 'AST-SRV-001',
    type: 'Scheduled Maintenance',
    description: 'Vệ sinh bụi rack server & nâng cấp Firmware RAID Controller.',
    date: '2026-07-15',
    cost: 0,
    status: 'Completed'
  }
];

const DEFAULT_AUDIT = [
  {
    id: 'aud_401',
    action: 'Bàn Giao Tài Sản',
    timestamp: '2026-08-04 14:30',
    details: 'Cấp phát Laptop AST-LAP-001 cho nhân viên Nguyễn Trần Anh (Software Dev).'
  },
  {
    id: 'aud_402',
    action: 'Cập Nhật Bản Quyền',
    timestamp: '2026-08-03 09:15',
    details: 'Gia hạn gói Microsoft 365 Enterprise E5 với 100 ghế bản quyền.'
  },
  {
    id: 'aud_403',
    action: 'Tạo Phiếu Bảo Trì',
    timestamp: '2026-08-02 16:45',
    details: 'Chuyển thiết bị AST-DES-001 sang trạng thái Đang bảo trì.'
  }
];

class ITAMApp {
  constructor() {
    this.assets = this.loadData(STORAGE_KEYS.ASSETS, DEFAULT_ASSETS);
    this.licenses = this.loadData(STORAGE_KEYS.LICENSES, DEFAULT_LICENSES);
    this.maintenance = this.loadData(STORAGE_KEYS.MAINTENANCE, DEFAULT_MAINTENANCE);
    this.auditLogs = this.loadData(STORAGE_KEYS.AUDIT, DEFAULT_AUDIT);
    
    this.currentPage = document.body.getAttribute('data-page') || 'dashboard';
    this.categoryChart = null;
    this.statusChart = null;
    this.html5QrcodeScanner = null;

    this.init();
  }

  loadData(key, defaultData) {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : [...defaultData];
    } catch (e) {
      console.warn('LocalStorage error:', e);
      return [...defaultData];
    }
  }

  saveState() {
    localStorage.setItem(STORAGE_KEYS.ASSETS, JSON.stringify(this.assets));
    localStorage.setItem(STORAGE_KEYS.LICENSES, JSON.stringify(this.licenses));
    localStorage.setItem(STORAGE_KEYS.MAINTENANCE, JSON.stringify(this.maintenance));
    localStorage.setItem(STORAGE_KEYS.AUDIT, JSON.stringify(this.auditLogs));
  }

  init() {
    this.initTheme();
    this.setupEventListeners();
    this.render();
  }

  initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    this.updateThemeIcon(savedTheme);
  }

  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE_KEYS.THEME, next);
    this.updateThemeIcon(next);
    if (this.currentPage === 'dashboard') this.renderCharts();
  }

  updateThemeIcon(theme) {
    const icon = document.querySelector('#btn-theme-toggle i');
    if (icon) {
      icon.className = theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    }
  }

  calculateDepreciation(asset) {
    const cost = Number(asset.cost) || 0;
    if (cost === 0 || !asset.purchaseDate) {
      return { currentValue: cost, depreciatedAmount: 0, ageYears: 0 };
    }

    const lifespans = { Laptop: 3, Mobile: 2, Desktop: 4, Monitor: 4, Server: 5, Networking: 5, Peripheral: 3 };
    const lifespan = lifespans[asset.category] || 4;
    const purchaseDate = new Date(asset.purchaseDate);
    const now = new Date();
    
    const diffTime = Math.max(0, now - purchaseDate);
    const ageYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);

    const annualDepreciation = cost / lifespan;
    const totalDepreciation = Math.min(cost, annualDepreciation * ageYears);
    const currentValue = Math.max(0, Math.round(cost - totalDepreciation));

    return { currentValue, depreciatedAmount: Math.round(totalDepreciation), ageYears: ageYears.toFixed(1), lifespan };
  }

  setupEventListeners() {
    document.getElementById('btn-theme-toggle')?.addEventListener('click', () => this.toggleTheme());

    document.getElementById('global-search')?.addEventListener('input', (e) => {
      if (this.currentPage === 'hardware') this.renderHardwareTable();
    });

    document.getElementById('filter-category')?.addEventListener('change', () => this.renderHardwareTable());
    document.getElementById('filter-status')?.addEventListener('change', () => this.renderHardwareTable());
    document.getElementById('filter-department')?.addEventListener('change', () => this.renderHardwareTable());
    document.getElementById('btn-reset-filters')?.addEventListener('click', () => {
      document.getElementById('filter-category').value = 'ALL';
      document.getElementById('filter-status').value = 'ALL';
      document.getElementById('filter-department').value = 'ALL';
      document.getElementById('global-search').value = '';
      this.renderHardwareTable();
    });

    document.getElementById('btn-scan-qr')?.addEventListener('click', () => this.openQRScannerModal());
    document.getElementById('modal-scanner-close')?.addEventListener('click', () => this.closeQRScannerModal());
    document.getElementById('modal-scanner-cancel')?.addEventListener('click', () => this.closeQRScannerModal());

    document.getElementById('btn-import-csv')?.addEventListener('click', () => {
      document.getElementById('file-import-csv').click();
    });
    document.getElementById('file-import-csv')?.addEventListener('change', (e) => this.handleCSVImport(e));

    document.getElementById('btn-print-audit-sheet')?.addEventListener('click', () => this.openAuditSheetModal());
    document.getElementById('modal-audit-sheet-close')?.addEventListener('click', () => this.closeModal('modal-audit-sheet'));
    document.getElementById('modal-audit-sheet-ok')?.addEventListener('click', () => this.closeModal('modal-audit-sheet'));
    document.getElementById('btn-do-print-sheet')?.addEventListener('click', () => window.print());

    document.getElementById('btn-add-maintenance')?.addEventListener('click', () => this.openMaintenanceModal());
    document.getElementById('btn-add-maintenance-top')?.addEventListener('click', () => this.openMaintenanceModal());
    document.getElementById('modal-maintenance-close')?.addEventListener('click', () => this.closeModal('modal-maintenance'));
    document.getElementById('modal-maintenance-cancel')?.addEventListener('click', () => this.closeModal('modal-maintenance'));
    document.getElementById('form-maintenance')?.addEventListener('submit', (e) => this.handleMaintenanceFormSubmit(e));

    document.getElementById('btn-seed-data')?.addEventListener('click', () => {
      if (confirm('Bạn có muốn khôi phục dữ liệu mẫu ITAM ban đầu không?')) {
        this.assets = [...DEFAULT_ASSETS];
        this.licenses = [...DEFAULT_LICENSES];
        this.maintenance = [...DEFAULT_MAINTENANCE];
        this.auditLogs = [...DEFAULT_AUDIT];
        this.saveState();
        this.logAudit('Nạp Dữ Liệu Mẫu', 'Đã khôi phục dữ liệu mẫu ITAM.');
        this.render();
        alert('Đã nạp dữ liệu thành công!');
      }
    });

    document.getElementById('btn-export-csv')?.addEventListener('click', () => this.exportCSV());

    document.getElementById('btn-add-asset')?.addEventListener('click', () => this.openAssetModal());
    document.getElementById('modal-asset-close')?.addEventListener('click', () => this.closeModal('modal-asset'));
    document.getElementById('modal-asset-cancel')?.addEventListener('click', () => this.closeModal('modal-asset'));
    document.getElementById('form-asset')?.addEventListener('submit', (e) => this.handleAssetFormSubmit(e));

    document.getElementById('btn-add-license')?.addEventListener('click', () => this.openLicenseModal());
    document.getElementById('btn-add-license-top')?.addEventListener('click', () => this.openLicenseModal());
    document.getElementById('modal-license-close')?.addEventListener('click', () => this.closeModal('modal-license'));
    document.getElementById('modal-license-cancel')?.addEventListener('click', () => this.closeModal('modal-license'));
    document.getElementById('form-license')?.addEventListener('submit', (e) => this.handleLicenseFormSubmit(e));

    document.getElementById('modal-qr-close')?.addEventListener('click', () => this.closeModal('modal-qr'));
    document.getElementById('modal-qr-ok')?.addEventListener('click', () => this.closeModal('modal-qr'));
    document.getElementById('btn-print-qr')?.addEventListener('click', () => window.print());

    document.getElementById('btn-clear-audit')?.addEventListener('click', () => this.clearAuditLogs());
    document.getElementById('btn-clear-audit-top')?.addEventListener('click', () => this.clearAuditLogs());
  }

  clearAuditLogs() {
    if (confirm('Bạn có chắc muốn xóa lịch sử nhật ký?')) {
      this.auditLogs = [];
      this.saveState();
      this.renderAuditTimeline();
    }
  }

  render() {
    this.updateBadges();
    
    if (this.currentPage === 'dashboard') {
      this.renderKPIs();
      this.renderCharts();
      this.renderDashboardAlerts();
    } else if (this.currentPage === 'hardware') {
      this.renderHardwareTable();
    } else if (this.currentPage === 'licenses') {
      this.renderLicenses();
    } else if (this.currentPage === 'maintenance') {
      this.renderMaintenance();
    } else if (this.currentPage === 'audit') {
      this.renderAuditTimeline();
    }
  }

  updateBadges() {
    const hwBadge = document.getElementById('badge-hardware-count');
    const licBadge = document.getElementById('badge-license-count');
    if (hwBadge) hwBadge.textContent = this.assets.length;
    if (licBadge) licBadge.textContent = this.licenses.length;
  }

  renderKPIs() {
    const totalAssets = this.assets.length;
    const totalValue = this.assets.reduce((sum, item) => sum + (Number(item.cost) || 0), 0);
    
    let totalDepreciatedValue = 0;
    this.assets.forEach(asset => {
      const dep = this.calculateDepreciation(asset);
      totalDepreciatedValue += dep.currentValue;
    });

    const inUseCount = this.assets.filter(a => a.status === 'In Use').length;
    const utilizationRate = totalAssets > 0 ? Math.round((inUseCount / totalAssets) * 100) : 0;
    const totalLicenses = this.licenses.length;

    const elTotal = document.getElementById('kpi-total-assets');
    const elVal = document.getElementById('kpi-total-value');
    const elDepVal = document.getElementById('kpi-depreciated-value');
    const elDepPct = document.getElementById('kpi-depreciation-pct');
    const elInUse = document.getElementById('kpi-in-use');
    const elUtil = document.getElementById('kpi-utilization-rate');
    const elLic = document.getElementById('kpi-total-licenses');

    if (elTotal) elTotal.textContent = totalAssets;
    if (elVal) elVal.textContent = '$' + totalValue.toLocaleString('en-US');
    if (elDepVal) elDepVal.textContent = '$' + totalDepreciatedValue.toLocaleString('en-US');
    
    const depPercentage = totalValue > 0 ? Math.round((totalDepreciatedValue / totalValue) * 100) : 100;
    if (elDepPct) elDepPct.textContent = `Còn ${depPercentage}% so với ban đầu`;
    if (elInUse) elInUse.textContent = inUseCount;
    if (elUtil) elUtil.textContent = `${utilizationRate}% Tỷ lệ cấp phát`;
    if (elLic) elLic.textContent = totalLicenses;
  }

  renderCharts() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const textColor = isDark ? '#9ca3af' : '#4b5563';

    const categories = ['Laptop', 'Desktop', 'Server', 'Monitor', 'Networking', 'Mobile', 'Peripheral'];
    const categoryCounts = categories.map(cat => this.assets.filter(a => a.category === cat).length);

    const ctxCat = document.getElementById('chart-category')?.getContext('2d');
    if (ctxCat) {
      if (this.categoryChart) this.categoryChart.destroy();
      this.categoryChart = new Chart(ctxCat, {
        type: 'doughnut',
        data: {
          labels: categories,
          datasets: [{
            data: categoryCounts,
            backgroundColor: ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#06b6d4', '#ec4899', '#6b7280'],
            borderWidth: 0
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'right', labels: { color: textColor, font: { family: 'Plus Jakarta Sans', size: 11 } } } }
        }
      });
    }

    const statuses = ['In Use', 'Available', 'Maintenance', 'Retired'];
    const statusCounts = statuses.map(st => this.assets.filter(a => a.status === st).length);

    const ctxStat = document.getElementById('chart-status')?.getContext('2d');
    if (ctxStat) {
      if (this.statusChart) this.statusChart.destroy();
      this.statusChart = new Chart(ctxStat, {
        type: 'bar',
        data: {
          labels: ['Đang Dùng', 'Sẵn Sàng', 'Bảo Trì', 'Thanh Lý'],
          datasets: [{
            label: 'Số lượng thiết bị',
            data: statusCounts,
            backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444'],
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: textColor } },
            y: { ticks: { color: textColor, stepSize: 1 }, grid: { color: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' } }
          }
        }
      });
    }
  }

  renderHardwareTable() {
    const tbody = document.getElementById('hardware-table-body');
    if (!tbody) return;

    const filterCat = document.getElementById('filter-category')?.value || 'ALL';
    const filterStat = document.getElementById('filter-status')?.value || 'ALL';
    const filterDept = document.getElementById('filter-department')?.value || 'ALL';
    const searchQuery = (document.getElementById('global-search')?.value || '').toLowerCase().trim();

    const filtered = this.assets.filter(asset => {
      const matchCat = filterCat === 'ALL' || asset.category === filterCat;
      const matchStat = filterStat === 'ALL' || asset.status === filterStat;
      const matchDept = filterDept === 'ALL' || asset.department === filterDept;

      const matchSearch = !searchQuery || 
        asset.tag.toLowerCase().includes(searchQuery) ||
        asset.name.toLowerCase().includes(searchQuery) ||
        asset.serial.toLowerCase().includes(searchQuery) ||
        asset.user.toLowerCase().includes(searchQuery);

      return matchCat && matchStat && matchDept && matchSearch;
    });

    tbody.innerHTML = '';

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" class="text-center" style="padding: 40px; color: var(--text-muted);">
            <i class="fa-solid fa-folder-open" style="font-size: 32px; margin-bottom: 8px;"></i>
            <p>Không tìm thấy thiết bị phù hợp với bộ lọc.</p>
          </td>
        </tr>
      `;
    } else {
      filtered.forEach(asset => {
        const tr = document.createElement('tr');
        
        let statusBadgeClass = 'badge-available';
        let statusText = 'Sẵn sàng';
        if (asset.status === 'In Use') { statusBadgeClass = 'badge-in-use'; statusText = 'Đang dùng'; }
        if (asset.status === 'Maintenance') { statusBadgeClass = 'badge-maintenance'; statusText = 'Bảo trì'; }
        if (asset.status === 'Retired') { statusBadgeClass = 'badge-retired'; statusText = 'Thanh lý'; }

        const dep = this.calculateDepreciation(asset);

        tr.innerHTML = `
          <td><span class="asset-tag-code">${asset.tag}</span></td>
          <td>
            <strong>${asset.name}</strong>
            <div style="font-size: 11px; color: var(--text-muted);">${asset.notes || 'Không có ghi chú'}</div>
          </td>
          <td>${asset.category}</td>
          <td><span class="serial-code">${asset.serial || 'N/A'}</span></td>
          <td>
            <div>${asset.user}</div>
            <small style="color: var(--text-muted);">${asset.department}</small>
          </td>
          <td>
            <div><strong>$${(Number(asset.cost) || 0).toLocaleString()}</strong></div>
            <div class="depreciated-price">Hiện tại: $${dep.currentValue.toLocaleString()} (${dep.ageYears}t)</div>
          </td>
          <td><span class="badge-status ${statusBadgeClass}">${statusText}</span></td>
          <td class="text-right">
            <button class="btn btn-sm btn-outline btn-icon" onclick="window.app.showQR('${asset.id}')" title="Xem QR Code & Khấu Hao">
              <i class="fa-solid fa-qrcode"></i>
            </button>
            <button class="btn btn-sm btn-outline btn-icon" onclick="window.app.openAssetModal('${asset.id}')" title="Chỉnh sửa">
              <i class="fa-solid fa-pen"></i>
            </button>
            <button class="btn btn-sm btn-outline btn-icon" style="color: var(--color-red);" onclick="window.app.deleteAsset('${asset.id}')" title="Xóa">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    const info = document.getElementById('table-results-info');
    if (info) info.textContent = `Hiển thị ${filtered.length} / ${this.assets.length} thiết bị`;
  }

  handleCSVImport(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target.result;
        const lines = text.split(/\r\n|\n/);
        let importedCount = 0;

        lines.forEach((line, idx) => {
          if (idx === 0 || !line.trim()) return;
          
          const parts = line.split(',').map(s => s.replace(/^"|"$/g, '').trim());
          if (parts.length >= 2) {
            const tag = parts[0] || `AST-IMP-${Date.now()}_${idx}`;
            const name = parts[1] || 'Thiết bị nhập';
            const category = parts[2] || 'Laptop';
            const serial = parts[3] || '';
            const user = parts[4] || 'Chưa Gán';
            const department = parts[5] || 'Stock Room';
            const status = parts[6] || 'Available';
            const cost = Number(parts[7]) || 1000;
            const purchaseDate = parts[8] || new Date().toISOString().slice(0,10);
            const warrantyDate = parts[9] || '';
            const notes = parts[10] || 'Nhập từ file CSV';

            this.assets.unshift({
              id: 'ast_imp_' + Date.now() + '_' + idx,
              tag, name, category, serial, user, department, status, cost, purchaseDate, warrantyDate, notes
            });
            importedCount++;
          }
        });

        this.saveState();
        this.logAudit('Nhập File CSV', `Đã nhập hàng loạt ${importedCount} tài sản từ file CSV (${file.name}).`);
        this.render();
        alert(`Đã nhập thành công ${importedCount} thiết bị từ file CSV!`);
      } catch (err) {
        alert('Lỗi đọc file CSV: ' + err.message);
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  openQRScannerModal() {
    this.openModal('modal-scanner');
    const resultMsg = document.getElementById('scanner-result-msg');
    if (resultMsg) resultMsg.textContent = '';

    if (window.Html5QrcodeScanner) {
      if (this.html5QrcodeScanner) {
        try { this.html5QrcodeScanner.clear(); } catch(e){}
      }

      this.html5QrcodeScanner = new Html5QrcodeScanner(
        "interactive-camera-reader",
        { fps: 10, qrbox: { width: 220, height: 220 } },
        false
      );

      this.html5QrcodeScanner.render(
        (decodedText) => this.onQRCodeScannedSuccess(decodedText),
        () => {}
      );
    } else {
      alert('Thư viện Camera QR Scanner đang tải, vui lòng thử lại sau 2 giây.');
    }
  }

  closeQRScannerModal() {
    if (this.html5QrcodeScanner) {
      try { this.html5QrcodeScanner.clear(); } catch(e){}
      this.html5QrcodeScanner = null;
    }
    this.closeModal('modal-scanner');
  }

  onQRCodeScannedSuccess(decodedText) {
    const resultMsg = document.getElementById('scanner-result-msg');
    if (resultMsg) resultMsg.textContent = `Đã nhận diện: ${decodedText}`;

    let tagQuery = decodedText;
    if (decodedText.includes('://')) {
      const parts = decodedText.split('://')[1].split('/');
      tagQuery = parts[0];
    }

    const matchedAsset = this.assets.find(a => 
      a.tag.toLowerCase() === tagQuery.toLowerCase() || 
      a.serial.toLowerCase() === tagQuery.toLowerCase()
    );

    if (matchedAsset) {
      this.logAudit('Quét Mã QR Cam', `Nhận diện mã QR thành công thiết bị ${matchedAsset.tag}.`);
      setTimeout(() => {
        this.closeQRScannerModal();
        this.showQR(matchedAsset.id);
      }, 800);
    } else {
      if (resultMsg) resultMsg.textContent = `Đã nhận mã: ${tagQuery} (Không tìm thấy trong DB)`;
    }
  }

  openAuditSheetModal() {
    const selectedDept = document.getElementById('filter-department')?.value || 'ALL';
    const deptName = selectedDept === 'ALL' ? 'Tất Cả Các Phòng Ban' : selectedDept;
    
    const deptAssets = this.assets.filter(a => selectedDept === 'ALL' || a.department === selectedDept);
    const totalVal = deptAssets.reduce((sum, a) => sum + (Number(a.cost) || 0), 0);

    const container = document.getElementById('printable-audit-container');
    const now = new Date();
    const formattedDate = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`;

    let rowsHtml = '';
    deptAssets.forEach((a, idx) => {
      rowsHtml += `
        <tr>
          <td>${idx + 1}</td>
          <td><strong>${a.tag}</strong></td>
          <td>${a.name}</td>
          <td>${a.category}</td>
          <td>${a.serial || 'N/A'}</td>
          <td>${a.user}</td>
          <td>${a.status}</td>
          <td>$${Number(a.cost).toLocaleString()}</td>
        </tr>
      `;
    });

    if (container) {
      container.innerHTML = `
        <div class="audit-sheet-paper">
          <div class="audit-sheet-header">
            <div class="audit-sheet-title">
              <h2>NEXUS ENTERPRISE IT</h2>
              <p style="font-size: 13px; color: #4b5563;">PHIẾU KIỂM KÊ & BÀN GIAO TÀI SẢN CNTT</p>
            </div>
            <div style="text-align: right; font-size: 12px; color: #4b5563;">
              <div>Ngày lập: <strong>${formattedDate}</strong></div>
              <div>Phòng Ban: <strong>${deptName}</strong></div>
            </div>
          </div>

          <p style="font-size: 12px; margin-bottom: 12px;">
            Danh sách chi tiết gồm <strong>${deptAssets.length}</strong> thiết bị thuộc quản lý của <strong>${deptName}</strong> với tổng nguyên giá trị đầu tư là <strong>$${totalVal.toLocaleString()} USD</strong>.
          </p>

          <table class="audit-sheet-table">
            <thead>
              <tr>
                <th>STT</th>
                <th>Mã Asset Tag</th>
                <th>Tên Thiết Bị / Model</th>
                <th>Danh Mục</th>
                <th>Số Serial</th>
                <th>Người Nắm Giữ</th>
                <th>Trạng Thái</th>
                <th>Nguyên Giá</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml || '<tr><td colspan="8" style="text-align:center;">Không có tài sản nào.</td></tr>'}
            </tbody>
          </table>

          <div class="audit-sheet-signatures">
            <div class="sig-box">
              <strong>ĐẠI DIỆN PHÒNG IT</strong>
              <div class="sig-line">(Ký và ghi rõ họ tên)</div>
            </div>
            <div class="sig-box">
              <strong>TRƯỞNG PHÒNG / NGƯỜI NHẬN</strong>
              <div class="sig-line">(Ký và ghi rõ họ tên)</div>
            </div>
          </div>
        </div>
      `;
    }

    this.openModal('modal-audit-sheet');
  }

  openMaintenanceModal() {
    const form = document.getElementById('form-maintenance');
    if (form) form.reset();
    const dateInput = document.getElementById('maint-date');
    if (dateInput) dateInput.value = new Date().toISOString().slice(0,10);
    this.openModal('modal-maintenance');
  }

  handleMaintenanceFormSubmit(e) {
    e.preventDefault();
    const assetTag = document.getElementById('maint-asset-tag').value.trim();
    const type = document.getElementById('maint-type').value;
    const cost = Number(document.getElementById('maint-cost').value) || 0;
    const date = document.getElementById('maint-date').value;
    const description = document.getElementById('maint-desc').value.trim();

    const newTicket = {
      id: 'mnt_' + Date.now(),
      assetTag,
      type,
      description,
      date,
      cost,
      status: 'In Progress'
    };

    this.maintenance.unshift(newTicket);
    
    const targetAsset = this.assets.find(a => a.tag.toLowerCase() === assetTag.toLowerCase());
    if (targetAsset) {
      targetAsset.status = 'Maintenance';
      this.logAudit('Tạo Phiếu Bảo Trì', `Chuyển tài sản ${targetAsset.tag} sang trạng thái Đang Bảo Trì.`);
    } else {
      this.logAudit('Tạo Phiếu Bảo Trì', `Tạo phiếu bảo trì cho mã ${assetTag}.`);
    }

    this.saveState();
    this.closeModal('modal-maintenance');
    this.render();
  }

  renderLicenses() {
    const container = document.getElementById('license-cards-container');
    if (!container) return;
    container.innerHTML = '';

    this.licenses.forEach(lic => {
      const pct = lic.totalSeats > 0 ? Math.round((lic.usedSeats / lic.totalSeats) * 100) : 0;
      const card = document.createElement('div');
      card.className = 'license-card glass';

      card.innerHTML = `
        <div class="license-card-header">
          <div>
            <span class="license-vendor">${lic.vendor}</span>
            <h4 class="license-title">${lic.name}</h4>
          </div>
          <button class="btn btn-sm btn-outline btn-icon" onclick="window.app.openLicenseModal('${lic.id}')">
            <i class="fa-solid fa-pen"></i>
          </button>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar-label">
            <span>Sử dụng Seat: ${lic.usedSeats} / ${lic.totalSeats}</span>
            <span>${pct}%</span>
          </div>
          <div class="progress-track">
            <div class="progress-fill ${pct > 90 ? 'warning' : ''}" style="width: ${pct}%"></div>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; font-size: 12px; color: var(--text-muted); margin-top: 10px;">
          <span>Chi phí/năm: <strong>$${Number(lic.cost).toLocaleString()}</strong></span>
          <span>Hạn: <strong>${lic.expiry || 'N/A'}</strong></span>
        </div>
      `;
      container.appendChild(card);
    });
  }

  renderMaintenance() {
    const tbody = document.getElementById('maintenance-table-body');
    if (!tbody) return;

    tbody.innerHTML = '';
    this.maintenance.forEach(m => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><span class="asset-tag-code">${m.id}</span></td>
        <td><strong>${m.assetTag}</strong></td>
        <td>${m.type}</td>
        <td>${m.description}</td>
        <td>${m.date}</td>
        <td>$${Number(m.cost).toLocaleString()}</td>
        <td><span class="badge-status ${m.status === 'Completed' ? 'badge-in-use' : 'badge-maintenance'}">${m.status}</span></td>
        <td class="text-right">
          <button class="btn btn-sm btn-outline" onclick="window.app.toggleMaintenanceStatus('${m.id}')">
            ${m.status === 'Completed' ? 'Mở lại' : 'Hoàn thành'}
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  toggleMaintenanceStatus(id) {
    const item = this.maintenance.find(m => m.id === id);
    if (item) {
      item.status = item.status === 'Completed' ? 'In Progress' : 'Completed';
      this.saveState();
      this.logAudit('Cập nhật Bảo Trì', `Chuyển trạng thái phiếu ${id} sang ${item.status}.`);
      this.renderMaintenance();
    }
  }

  renderAuditTimeline() {
    const container = document.getElementById('audit-timeline-container');
    if (!container) return;

    container.innerHTML = '';
    if (this.auditLogs.length === 0) {
      container.innerHTML = '<p class="text-muted">Chưa có nhật ký nào được ghi lại.</p>';
      return;
    }

    this.auditLogs.slice(0, 30).forEach((log) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      item.innerHTML = `
        <div class="timeline-badge"><i class="fa-solid fa-clock-rotate-left"></i></div>
        <div class="timeline-content">
          <div class="timeline-header-info">
            <span class="timeline-action">${log.action}</span>
            <span class="timeline-time">${log.timestamp}</span>
          </div>
          <p class="timeline-desc">${log.details}</p>
        </div>
      `;
      container.appendChild(item);
    });
  }

  renderDashboardAlerts() {
    const container = document.getElementById('alerts-list');
    const recentLogsContainer = document.getElementById('recent-logs-list');
    if (!container) return;

    container.innerHTML = '';
    if (recentLogsContainer) recentLogsContainer.innerHTML = '';

    const alerts = [];
    const maintAssets = this.assets.filter(a => a.status === 'Maintenance');
    if (maintAssets.length > 0) {
      alerts.push({
        title: `${maintAssets.length} thiết bị đang bảo trì`,
        desc: `Bao gồm: ${maintAssets.map(a => a.tag).join(', ')}`
      });
    }

    this.licenses.forEach(l => {
      const pct = Math.round((l.usedSeats / l.totalSeats) * 100);
      if (pct >= 90) {
        alerts.push({
          title: `Bản quyền ${l.name} sắp hết chỗ (${pct}%)`,
          desc: `Đã cấp ${l.usedSeats} / ${l.totalSeats} seats.`
        });
      }
    });

    if (alerts.length === 0) {
      container.innerHTML = '<p style="color: var(--text-muted); font-size: 13px;">Hệ thống vận hành bình thường, không có cảnh báo nguy cấp.</p>';
    } else {
      alerts.forEach(al => {
        const div = document.createElement('div');
        div.className = 'alert-item';
        div.innerHTML = `
          <i class="fa-solid fa-circle-exclamation"></i>
          <div>
            <div class="alert-title">${al.title}</div>
            <div class="alert-desc">${al.desc}</div>
          </div>
        `;
        container.appendChild(div);
      });
    }

    if (recentLogsContainer) {
      this.auditLogs.slice(0, 4).forEach(log => {
        const smItem = document.createElement('div');
        smItem.className = 'timeline-item-sm';
        smItem.innerHTML = `
          <div class="timeline-icon-sm"><i class="fa-solid fa-check"></i></div>
          <div>
            <div style="font-weight: 700;">${log.action}</div>
            <div style="font-size: 11px; color: var(--text-muted);">${log.details}</div>
          </div>
        `;
        recentLogsContainer.appendChild(smItem);
      });
    }
  }

  logAudit(action, details) {
    const now = new Date();
    const timestamp = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
    
    this.auditLogs.unshift({ id: 'aud_' + Date.now(), action, timestamp, details });
    this.saveState();
  }

  openModal(id) { document.getElementById(id)?.classList.add('active'); }
  closeModal(id) { document.getElementById(id)?.classList.remove('active'); }

  openAssetModal(assetId = null) {
    const form = document.getElementById('form-asset');
    if (form) form.reset();

    if (assetId) {
      const asset = this.assets.find(a => a.id === assetId);
      if (asset) {
        document.getElementById('modal-asset-title').innerHTML = '<i class="fa-solid fa-pen"></i> Chỉnh Sửa Tài Sản';
        document.getElementById('asset-id').value = asset.id;
        document.getElementById('asset-tag').value = asset.tag;
        document.getElementById('asset-name').value = asset.name;
        document.getElementById('asset-category').value = asset.category;
        document.getElementById('asset-serial').value = asset.serial || '';
        document.getElementById('asset-user').value = asset.user || '';
        document.getElementById('asset-department').value = asset.department;
        document.getElementById('asset-status').value = asset.status;
        document.getElementById('asset-cost').value = asset.cost || 0;
        document.getElementById('asset-purchase-date').value = asset.purchaseDate || '';
        document.getElementById('asset-warranty-date').value = asset.warrantyDate || '';
        document.getElementById('asset-notes').value = asset.notes || '';
      }
    } else {
      document.getElementById('modal-asset-title').innerHTML = '<i class="fa-solid fa-plus-circle"></i> Thêm Tài Sản Mới';
      document.getElementById('asset-id').value = '';
      document.getElementById('asset-tag').value = 'AST-LAP-00' + (this.assets.length + 1);
    }
    this.openModal('modal-asset');
  }

  handleAssetFormSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('asset-id').value;
    
    const assetData = {
      id: id || ('ast_' + Date.now()),
      tag: document.getElementById('asset-tag').value.trim(),
      name: document.getElementById('asset-name').value.trim(),
      category: document.getElementById('asset-category').value,
      serial: document.getElementById('asset-serial').value.trim(),
      user: document.getElementById('asset-user').value.trim() || 'Chưa Gán',
      department: document.getElementById('asset-department').value,
      status: document.getElementById('asset-status').value,
      cost: Number(document.getElementById('asset-cost').value) || 0,
      purchaseDate: document.getElementById('asset-purchase-date').value,
      warrantyDate: document.getElementById('asset-warranty-date').value,
      notes: document.getElementById('asset-notes').value.trim()
    };

    if (id) {
      const idx = this.assets.findIndex(a => a.id === id);
      if (idx !== -1) {
        this.assets[idx] = assetData;
        this.logAudit('Cập nhật Tài sản', `Đã sửa thông tin thiết bị ${assetData.tag} (${assetData.name}).`);
      }
    } else {
      this.assets.unshift(assetData);
      this.logAudit('Thêm Tài sản', `Đã thêm mới thiết bị ${assetData.tag} (${assetData.name}).`);
    }

    this.saveState();
    this.closeModal('modal-asset');
    this.render();
  }

  deleteAsset(assetId) {
    const asset = this.assets.find(a => a.id === assetId);
    if (asset && confirm(`Bạn có chắc muốn xóa tài sản [${asset.tag}] ${asset.name}?`)) {
      this.assets = this.assets.filter(a => a.id !== assetId);
      this.logAudit('Xóa Tài sản', `Đã xóa tài sản ${asset.tag} khỏi hệ thống.`);
      this.saveState();
      this.render();
    }
  }

  showQR(assetId) {
    const asset = this.assets.find(a => a.id === assetId);
    if (!asset) return;

    document.getElementById('qr-asset-name').textContent = asset.name;
    document.getElementById('qr-asset-tag').textContent = asset.tag;
    document.getElementById('qr-asset-serial').textContent = `SN: ${asset.serial || 'N/A'} | ${asset.department}`;

    const dep = this.calculateDepreciation(asset);
    const depDiv = document.getElementById('qr-depreciation-info');
    if (depDiv) {
      depDiv.innerHTML = `Nguyên giá: $${Number(asset.cost).toLocaleString()} | Giá trị khấu hao: <strong>$${dep.currentValue.toLocaleString()}</strong> (${dep.ageYears} tuổi)`;
    }

    const qrContainer = document.getElementById('qrcode-container');
    if (qrContainer) {
      qrContainer.innerHTML = '';
      if (window.QRCode) {
        new QRCode(qrContainer, {
          text: `NEXUS-ITAM://${asset.tag}/${asset.serial}`,
          width: 140,
          height: 140,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H
        });
      }
    }

    this.openModal('modal-qr');
  }

  openLicenseModal(licId = null) {
    const form = document.getElementById('form-license');
    if (form) form.reset();

    if (licId) {
      const lic = this.licenses.find(l => l.id === licId);
      if (lic) {
        document.getElementById('modal-license-title').innerHTML = '<i class="fa-solid fa-pen"></i> Sửa Bản Quyền';
        document.getElementById('license-id').value = lic.id;
        document.getElementById('license-name').value = lic.name;
        document.getElementById('license-vendor').value = lic.vendor;
        document.getElementById('license-total-seats').value = lic.totalSeats;
        document.getElementById('license-used-seats').value = lic.usedSeats;
        document.getElementById('license-cost').value = lic.cost;
        document.getElementById('license-expiry').value = lic.expiry;
        document.getElementById('license-key').value = lic.key || '';
      }
    } else {
      document.getElementById('modal-license-title').innerHTML = '<i class="fa-solid fa-key"></i> Thêm Bản Quyền Phần Mềm';
      document.getElementById('license-id').value = '';
    }
    this.openModal('modal-license');
  }

  handleLicenseFormSubmit(e) {
    e.preventDefault();
    const id = document.getElementById('license-id').value;

    const licData = {
      id: id || ('lic_' + Date.now()),
      name: document.getElementById('license-name').value.trim(),
      vendor: document.getElementById('license-vendor').value.trim(),
      totalSeats: Number(document.getElementById('license-total-seats').value) || 1,
      usedSeats: Number(document.getElementById('license-used-seats').value) || 0,
      cost: Number(document.getElementById('license-cost').value) || 0,
      expiry: document.getElementById('license-expiry').value,
      key: document.getElementById('license-key').value.trim()
    };

    if (id) {
      const idx = this.licenses.findIndex(l => l.id === id);
      if (idx !== -1) {
        this.licenses[idx] = licData;
        this.logAudit('Cập nhật Bản quyền', `Sửa bản quyền ${licData.name}.`);
      }
    } else {
      this.licenses.unshift(licData);
      this.logAudit('Thêm Bản quyền', `Thêm phần mềm SaaS mới: ${licData.name}.`);
    }

    this.saveState();
    this.closeModal('modal-license');
    this.render();
  }

  exportCSV() {
    if (this.assets.length === 0) {
      alert('Không có dữ liệu để xuất file CSV!');
      return;
    }

    const headers = ['Asset Tag', 'Tên Thiết Bị', 'Danh Mục', 'Số Serial', 'Người Giữ', 'Phòng Ban', 'Trạng Thái', 'Giá Mua (USD)', 'Giá Trị Hiện Tại (Khấu Hao)', 'Ngày Mua', 'Hạn Bảo Hành', 'Ghi Chú'];
    
    const rows = this.assets.map(a => {
      const dep = this.calculateDepreciation(a);
      return [
        `"${a.tag}"`,
        `"${a.name.replace(/"/g, '""')}"`,
        `"${a.category}"`,
        `"${a.serial}"`,
        `"${a.user}"`,
        `"${a.department}"`,
        `"${a.status}"`,
        a.cost,
        dep.currentValue,
        `"${a.purchaseDate}"`,
        `"${a.warrantyDate}"`,
        `"${(a.notes || '').replace(/"/g, '""')}"`
      ];
    });

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `IT_Assets_Report_${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    this.logAudit('Xuất Báo Cáo', 'Đã xuất toàn bộ danh sách tài sản IT ra file Excel CSV.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new ITAMApp();
});
