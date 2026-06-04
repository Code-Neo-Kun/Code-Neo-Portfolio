// ─── Project Data ─────────────────────────────────────────────────────────────
// Each project maps to a card via data-project-id.
// Replace placeholder SVG "images" with real <img> src paths when ready.

const PROJECTS = {
  'woo-marketplace': {
    title:    'WooCommerce Marketplace',
    category: 'WordPress / WooCommerce',
    year:     '2024',
    tags:     ['PHP', 'WooCommerce', 'MySQL', 'REST API'],
    badge:    { label: 'WordPress', color: 'cyan' },
    metrics:  [{ label: 'GMV Increase', value: '+40%' }, { label: 'Active Vendors', value: '12' }, { label: 'Uptime', value: '99.9%' }],
    overview: 'Built a full multi-vendor marketplace on top of WooCommerce for a client in the handmade goods space. The platform needed vendor onboarding, isolated dashboards, commission splitting, and automated payouts.',
    challenge:'The client had outgrown a single-seller WooCommerce setup. They needed multiple vendors to manage their own products, orders, and earnings — without a bloated third-party plugin that would conflict with their existing customisations.',
    solution: 'Architected a custom OOP PHP plugin that extends WooCommerce natively: custom post types for vendor profiles, a meta-driven commission engine, role-based dashboards, and Stripe Connect for split payouts. No third-party marketplace plugin.',
    techDetail: [
      { label: 'Backend',    value: 'PHP 8.1 OOP, WordPress hooks architecture' },
      { label: 'Database',   value: 'Custom tables via dbDelta + wp_postmeta' },
      { label: 'Payments',   value: 'Stripe Connect — split payouts on order complete' },
      { label: 'Auth',       value: 'Role-based: vendor, customer, admin' },
      { label: 'API',        value: 'Custom REST endpoints for vendor dashboard data' },
    ],
    gallery: [
      { type: 'svg', label: 'Vendor Dashboard', svg: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="450" fill="#0D1117"/><rect x="0" y="0" width="200" height="450" fill="#111820"/><rect x="20" y="30" width="160" height="32" rx="4" fill="#0F1520" stroke="rgba(0,245,255,0.15)" stroke-width="1"/><text x="40" y="51" font-family="monospace" font-size="11" fill="#00F5FF">[Code Neo]_</text><rect x="20" y="90" width="160" height="28" rx="3" fill="rgba(0,245,255,0.08)"/><text x="36" y="108" font-family="monospace" font-size="10" fill="#00F5FF">// dashboard</text><rect x="20" y="126" width="160" height="28" rx="3"/><text x="36" y="144" font-family="monospace" font-size="10" fill="#5A6478">// products</text><rect x="20" y="162" width="160" height="28" rx="3"/><text x="36" y="180" font-family="monospace" font-size="10" fill="#5A6478">// orders</text><rect x="20" y="198" width="160" height="28" rx="3"/><text x="36" y="216" font-family="monospace" font-size="10" fill="#5A6478">// payouts</text><text x="228" y="50" font-family="monospace" font-size="13" fill="#E8EDF5" font-weight="700">Vendor Dashboard</text><rect x="228" y="70" width="170" height="80" rx="6" fill="#0F1520" stroke="rgba(0,245,255,0.12)" stroke-width="1"/><text x="248" y="95" font-family="monospace" font-size="10" fill="#5A6478">// total_revenue</text><text x="248" y="120" font-family="sans-serif" font-size="22" fill="#00F5FF" font-weight="700">$12,480</text><rect x="412" y="70" width="170" height="80" rx="6" fill="#0F1520" stroke="rgba(57,255,20,0.12)" stroke-width="1"/><text x="432" y="95" font-family="monospace" font-size="10" fill="#5A6478">// active_orders</text><text x="432" y="120" font-family="sans-serif" font-size="22" fill="#39FF14" font-weight="700">47</text><rect x="596" y="70" width="170" height="80" rx="6" fill="#0F1520" stroke="rgba(0,245,255,0.12)" stroke-width="1"/><text x="616" y="95" font-family="monospace" font-size="10" fill="#5A6478">// products</text><text x="616" y="120" font-family="sans-serif" font-size="22" fill="#E8EDF5" font-weight="700">183</text><rect x="228" y="168" width="538" height="200" rx="6" fill="#0F1520" stroke="rgba(255,255,255,0.06)" stroke-width="1"/><text x="248" y="193" font-family="monospace" font-size="10" fill="#5A6478">// recent_orders</text><rect x="228" y="205" width="538" height="1" fill="rgba(255,255,255,0.06)"/><rect x="248" y="218" width="380" height="20" rx="3" fill="rgba(0,245,255,0.05)"/><rect x="248" y="248" width="320" height="20" rx="3" fill="rgba(255,255,255,0.03)"/><rect x="248" y="278" width="360" height="20" rx="3" fill="rgba(255,255,255,0.03)"/><rect x="248" y="308" width="300" height="20" rx="3" fill="rgba(255,255,255,0.03)"/></svg>` },
      { type: 'svg', label: 'Order Management', svg: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="450" fill="#0D1117"/><text x="32" y="52" font-family="monospace" font-size="13" fill="#E8EDF5" font-weight="700">Order Management</text><text x="32" y="72" font-family="monospace" font-size="10" fill="#5A6478">// 47 active orders across 12 vendors</text><rect x="32" y="90" width="736" height="36" rx="4" fill="#111820" stroke="rgba(0,245,255,0.1)" stroke-width="1"/><text x="52" y="113" font-family="monospace" font-size="9" fill="#00F5FF">ORDER_ID</text><text x="200" y="113" font-family="monospace" font-size="9" fill="#00F5FF">CUSTOMER</text><text x="380" y="113" font-family="monospace" font-size="9" fill="#00F5FF">AMOUNT</text><text x="500" y="113" font-family="monospace" font-size="9" fill="#00F5FF">VENDOR</text><text x="660" y="113" font-family="monospace" font-size="9" fill="#00F5FF">STATUS</text><rect x="32" y="134" width="736" height="36" rx="4" fill="#0F1520"/><text x="52" y="157" font-family="monospace" font-size="9" fill="#8892A4">#7821</text><text x="200" y="157" font-family="monospace" font-size="9" fill="#8892A4">jane@email.com</text><text x="380" y="157" font-family="monospace" font-size="9" fill="#E8EDF5">$142.00</text><text x="500" y="157" font-family="monospace" font-size="9" fill="#8892A4">CraftsByLena</text><rect x="648" y="144" width="64" height="20" rx="10" fill="rgba(57,255,20,0.12)"/><text x="664" y="158" font-family="monospace" font-size="8" fill="#39FF14">complete</text><rect x="32" y="178" width="736" height="36" rx="4" fill="rgba(0,245,255,0.02)"/><text x="52" y="201" font-family="monospace" font-size="9" fill="#8892A4">#7820</text><text x="200" y="201" font-family="monospace" font-size="9" fill="#8892A4">mark@shop.io</text><text x="380" y="201" font-family="monospace" font-size="9" fill="#E8EDF5">$89.50</text><text x="500" y="201" font-family="monospace" font-size="9" fill="#8892A4">WoodWorks</text><rect x="648" y="188" width="60" height="20" rx="10" fill="rgba(0,245,255,0.1)"/><text x="660" y="202" font-family="monospace" font-size="8" fill="#00F5FF">processing</text><rect x="32" y="222" width="736" height="36" rx="4" fill="#0F1520"/><rect x="32" y="266" width="736" height="36" rx="4" fill="rgba(0,245,255,0.02)"/><rect x="32" y="310" width="736" height="36" rx="4" fill="#0F1520"/><rect x="32" y="354" width="736" height="36" rx="4" fill="rgba(0,245,255,0.02)"/></svg>` },
      { type: 'svg', label: 'Payout Split Engine', svg: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="450" fill="#0D1117"/><text x="32" y="52" font-family="monospace" font-size="13" fill="#E8EDF5" font-weight="700">Commission & Payout Engine</text><rect x="32" y="80" width="350" height="200" rx="6" fill="#0F1520" stroke="rgba(0,245,255,0.12)" stroke-width="1"/><text x="52" y="108" font-family="monospace" font-size="10" fill="#00F5FF">// order_total: $200.00</text><text x="52" y="132" font-family="monospace" font-size="10" fill="#5A6478">platform_fee:   <tspan fill="#E8EDF5">$20.00</tspan> <tspan fill="#5A6478">(10%)</tspan></text><text x="52" y="156" font-family="monospace" font-size="10" fill="#5A6478">vendor_payout:  <tspan fill="#39FF14">$180.00</tspan> <tspan fill="#5A6478">(90%)</tspan></text><text x="52" y="180" font-family="monospace" font-size="10" fill="#5A6478">stripe_fee:     <tspan fill="#E8EDF5">$6.10</tspan></text><text x="52" y="204" font-family="monospace" font-size="10" fill="#5A6478">net_to_vendor:  <tspan fill="#39FF14">$173.90</tspan></text><text x="52" y="240" font-family="monospace" font-size="10" fill="#00F5FF">// trigger: woocommerce_order_complete</text><text x="52" y="260" font-family="monospace" font-size="10" fill="#39FF14">✓ Stripe Connect transfer initiated</text><rect x="406" y="80" width="362" height="200" rx="6" fill="#0F1520" stroke="rgba(57,255,20,0.12)" stroke-width="1"/><text x="426" y="108" font-family="monospace" font-size="10" fill="#39FF14">// monthly_summary</text><text x="426" y="136" font-family="monospace" font-size="10" fill="#5A6478">total_orders:    <tspan fill="#E8EDF5">47</tspan></text><text x="426" y="160" font-family="monospace" font-size="10" fill="#5A6478">total_gmv:       <tspan fill="#00F5FF">$12,480</tspan></text><text x="426" y="184" font-family="monospace" font-size="10" fill="#5A6478">platform_rev:    <tspan fill="#E8EDF5">$1,248</tspan></text><text x="426" y="208" font-family="monospace" font-size="10" fill="#5A6478">payouts_sent:    <tspan fill="#39FF14">$11,232</tspan></text><text x="426" y="248" font-family="monospace" font-size="10" fill="#5A6478">vendors_active:  <tspan fill="#E8EDF5">12</tspan></text></svg>` },
    ],
  },

  'shopify-fashion': {
    title:    'Fashion Brand Storefront',
    category: 'Shopify / Liquid',
    year:     '2024',
    tags:     ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
    badge:    { label: 'Shopify', color: 'green' },
    metrics:  [{ label: 'Conversion Rate', value: '+28%' }, { label: 'Load Time', value: '1.9s' }, { label: 'Mobile Score', value: '97' }],
    overview: 'Full ground-up Shopify theme for a fashion brand selling premium streetwear. Required a custom design language, fast product pages with upsell flows, and metafield-driven editorial content.',
    challenge: 'The brand was on a third-party theme that was impossible to customise without breaking things. Every update from Shopify or the theme developer broke something. Performance was at 38/100 on mobile.',
    solution: 'Built a custom Liquid theme from a blank slate. All sections are schema-defined and fully configurable via the Shopify theme editor. Lazy-loading, preload hints, and deferred JS brought mobile PageSpeed from 38 to 97.',
    techDetail: [
      { label: 'Theme',      value: 'Custom Liquid, zero third-party dependencies' },
      { label: 'Performance','value': 'Lazy images, preload LCP, deferred non-critical JS' },
      { label: 'Upsells',    value: 'Cart drawer with cross-sell recommendations' },
      { label: 'Sections',   value: '18 custom theme editor sections' },
      { label: 'Metafields', value: 'Editorial content blocks driven by Shopify metafields' },
    ],
    gallery: [
      { type: 'svg', label: 'Homepage Hero', svg: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="450" fill="#0D1117"/><rect x="0" y="0" width="800" height="450" fill="url(#grad1)"/><defs><linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#0a1f0d"/><stop offset="100%" style="stop-color:#080b10"/></linearGradient></defs><text x="400" y="160" font-family="sans-serif" font-size="52" fill="#E8EDF5" font-weight="700" text-anchor="middle" letter-spacing="-2">WEAR THE</text><text x="400" y="220" font-family="sans-serif" font-size="52" fill="#39FF14" font-weight="700" text-anchor="middle" letter-spacing="-2">DIFFERENCE</text><text x="400" y="265" font-family="monospace" font-size="12" fill="#5A6478" text-anchor="middle" letter-spacing="4">PREMIUM STREETWEAR SINCE 2020</text><rect x="300" y="295" width="200" height="44" rx="4" fill="#39FF14"/><text x="400" y="322" font-family="monospace" font-size="11" fill="#080b10" text-anchor="middle" font-weight="700" letter-spacing="2">SHOP NOW →</text><rect x="0" y="420" width="800" height="30" fill="rgba(0,0,0,0.4)"/><text x="32" y="440" font-family="monospace" font-size="9" fill="#5A6478">free shipping on orders $80+</text><text x="400" y="440" font-family="monospace" font-size="9" fill="#5A6478" text-anchor="middle">new drop: every friday</text><text x="768" y="440" font-family="monospace" font-size="9" fill="#5A6478" text-anchor="end">returns within 30 days</text></svg>` },
      { type: 'svg', label: 'Product Page', svg: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="450" fill="#0D1117"/><rect x="32" y="32" width="340" height="380" rx="6" fill="#111820" stroke="rgba(57,255,20,0.1)" stroke-width="1"/><text x="202" y="222" font-family="sans-serif" font-size="11" fill="#5A6478" text-anchor="middle">[ product image ]</text><rect x="32" y="384" width="80" height="8" rx="2" fill="rgba(57,255,20,0.3)"/><rect x="122" y="384" width="80" height="8" rx="2" fill="rgba(255,255,255,0.1)"/><rect x="212" y="384" width="80" height="8" rx="2" fill="rgba(255,255,255,0.1)"/><text x="400" y="64" font-family="monospace" font-size="9" fill="#5A6478">// streetwear / oversized</text><text x="400" y="90" font-family="sans-serif" font-size="20" fill="#E8EDF5" font-weight="700">Arch Logo Oversized Tee</text><text x="400" y="118" font-family="sans-serif" font-size="18" fill="#39FF14" font-weight="700">$65.00</text><text x="400" y="150" font-family="monospace" font-size="9" fill="#5A6478">// size</text><rect x="400" y="162" width="36" height="36" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><text x="418" y="185" font-family="monospace" font-size="10" fill="#8892A4" text-anchor="middle">XS</text><rect x="444" y="162" width="36" height="36" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><text x="462" y="185" font-family="monospace" font-size="10" fill="#8892A4" text-anchor="middle">S</text><rect x="488" y="162" width="36" height="36" rx="3" fill="rgba(57,255,20,0.12)" stroke="rgba(57,255,20,0.4)" stroke-width="1.5"/><text x="506" y="185" font-family="monospace" font-size="10" fill="#39FF14" text-anchor="middle">M</text><rect x="532" y="162" width="36" height="36" rx="3" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/><text x="550" y="185" font-family="monospace" font-size="10" fill="#8892A4" text-anchor="middle">L</text><rect x="400" y="218" width="360" height="48" rx="4" fill="#39FF14"/><text x="580" y="248" font-family="monospace" font-size="11" fill="#080b10" text-anchor="middle" font-weight="700">ADD TO CART →</text><rect x="400" y="278" width="360" height="80" rx="4" fill="#0F1520" stroke="rgba(255,255,255,0.06)" stroke-width="1"/><text x="420" y="300" font-family="monospace" font-size="9" fill="#5A6478">// frequently bought with</text><rect x="420" y="312" width="60" height="32" rx="3" fill="#111820"/><rect x="490" y="312" width="60" height="32" rx="3" fill="#111820"/><rect x="560" y="312" width="60" height="32" rx="3" fill="#111820"/><text x="720" y="332" font-family="monospace" font-size="9" fill="#39FF14">add all</text></svg>` },
      { type: 'svg', label: 'PageSpeed Score', svg: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="450" fill="#0D1117"/><text x="400" y="56" font-family="monospace" font-size="12" fill="#5A6478" text-anchor="middle" letter-spacing="4">// PAGESPEED RESULTS</text><circle cx="200" cy="230" r="100" fill="none" stroke="#111820" stroke-width="16"/><circle cx="200" cy="230" r="100" fill="none" stroke="#39FF14" stroke-width="16" stroke-dasharray="534" stroke-dashoffset="27" stroke-linecap="round" transform="rotate(-90 200 230)"/><text x="200" y="222" font-family="sans-serif" font-size="40" fill="#39FF14" font-weight="700" text-anchor="middle">97</text><text x="200" y="250" font-family="monospace" font-size="10" fill="#5A6478" text-anchor="middle">MOBILE</text><circle cx="600" cy="230" r="100" fill="none" stroke="#111820" stroke-width="16"/><circle cx="600" cy="230" r="100" fill="none" stroke="#00F5FF" stroke-width="16" stroke-dasharray="534" stroke-dashoffset="11" stroke-linecap="round" transform="rotate(-90 600 230)"/><text x="600" y="222" font-family="sans-serif" font-size="40" fill="#00F5FF" font-weight="700" text-anchor="middle">99</text><text x="600" y="250" font-family="monospace" font-size="10" fill="#5A6478" text-anchor="middle">DESKTOP</text><text x="200" y="370" font-family="monospace" font-size="10" fill="#5A6478" text-anchor="middle">LCP: 1.2s  ·  FID: 8ms  ·  CLS: 0.01</text><text x="600" y="370" font-family="monospace" font-size="10" fill="#5A6478" text-anchor="middle">LCP: 0.8s  ·  FID: 4ms  ·  CLS: 0.00</text></svg>` },
    ],
  },

  'rest-api-plugin': {
    title:    'REST API Sync Plugin',
    category: 'WordPress Plugin Dev',
    year:     '2023',
    tags:     ['PHP OOP', 'REST API', 'Cron', 'WordPress'],
    badge:    { label: 'Plugin Dev', color: 'cyan' },
    metrics:  [{ label: 'Records/Day', value: '10k+' }, { label: 'Uptime', value: '99.9%' }, { label: 'Sync Lag', value: '<5 min' }],
    overview: 'Custom WordPress plugin for bidirectional CRM data sync. Client needed their WP site\'s form submissions, user registrations, and WooCommerce orders to flow into their CRM in real-time, with changes back-syncing to WordPress.',
    challenge: 'Existing Zapier-based workaround was hitting rate limits, dropping records during traffic spikes, and had no error recovery. Every missed sync required manual intervention.',
    solution: 'Built a standalone OOP plugin with a custom REST API layer, WP-Cron batch processing, a DB-backed job queue, and full retry logic. Failed syncs are queued and retried with exponential backoff.',
    techDetail: [
      { label: 'Architecture', value: 'OOP PHP 8.1 — Service Container, Repository pattern' },
      { label: 'Queue',        value: 'Custom DB table — job queue with status tracking' },
      { label: 'Retry',        value: 'Exponential backoff — 3 retries then dead-letter log' },
      { label: 'Endpoints',    value: '4 custom REST endpoints under /wp-json/neo-sync/v1/' },
      { label: 'Cron',         value: 'WP-Cron every 5 min — batches of 200 records' },
    ],
    gallery: [
      { type: 'svg', label: 'Plugin Architecture', svg: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="450" fill="#0D1117"/><text x="400" y="40" font-family="monospace" font-size="11" fill="#5A6478" text-anchor="middle" letter-spacing="3">// PLUGIN ARCHITECTURE</text><rect x="60" y="70" width="160" height="50" rx="4" fill="#0F1520" stroke="rgba(0,245,255,0.2)" stroke-width="1"/><text x="140" y="100" font-family="monospace" font-size="9" fill="#00F5FF" text-anchor="middle">WP Form Submission</text><rect x="60" y="160" width="160" height="50" rx="4" fill="#0F1520" stroke="rgba(0,245,255,0.2)" stroke-width="1"/><text x="140" y="190" font-family="monospace" font-size="9" fill="#00F5FF" text-anchor="middle">WC Order Hook</text><rect x="60" y="250" width="160" height="50" rx="4" fill="#0F1520" stroke="rgba(0,245,255,0.2)" stroke-width="1"/><text x="140" y="280" font-family="monospace" font-size="9" fill="#00F5FF" text-anchor="middle">User Registration</text><line x1="220" y1="95" x2="310" y2="200" stroke="rgba(0,245,255,0.3)" stroke-width="1" stroke-dasharray="4 3"/><line x1="220" y1="185" x2="310" y2="210" stroke="rgba(0,245,255,0.3)" stroke-width="1" stroke-dasharray="4 3"/><line x1="220" y1="275" x2="310" y2="220" stroke="rgba(0,245,255,0.3)" stroke-width="1" stroke-dasharray="4 3"/><rect x="310" y="165" width="180" height="70" rx="4" fill="#111820" stroke="rgba(57,255,20,0.3)" stroke-width="1.5"/><text x="400" y="196" font-family="monospace" font-size="10" fill="#39FF14" text-anchor="middle">Job Queue</text><text x="400" y="214" font-family="monospace" font-size="8" fill="#5A6478" text-anchor="middle">DB-backed + retry logic</text><line x1="490" y1="200" x2="580" y2="145" stroke="rgba(57,255,20,0.3)" stroke-width="1" stroke-dasharray="4 3"/><line x1="490" y1="200" x2="580" y2="255" stroke="rgba(57,255,20,0.3)" stroke-width="1" stroke-dasharray="4 3"/><rect x="580" y="110" width="160" height="50" rx="4" fill="#0F1520" stroke="rgba(0,245,255,0.2)" stroke-width="1"/><text x="660" y="140" font-family="monospace" font-size="9" fill="#00F5FF" text-anchor="middle">CRM API Push</text><rect x="580" y="220" width="160" height="50" rx="4" fill="#0F1520" stroke="rgba(57,255,20,0.2)" stroke-width="1"/><text x="660" y="250" font-family="monospace" font-size="9" fill="#39FF14" text-anchor="middle">WP Back-sync</text><text x="400" y="400" font-family="monospace" font-size="9" fill="#5A6478" text-anchor="middle">WP-Cron: every 5min · batch: 200 records · retry: 3x exponential backoff</text></svg>` },
      { type: 'svg', label: 'Sync Log Dashboard', svg: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="450" fill="#0D1117"/><text x="32" y="44" font-family="monospace" font-size="12" fill="#E8EDF5" font-weight="700">Neo Sync — Admin Log</text><text x="32" y="64" font-family="monospace" font-size="9" fill="#5A6478">Settings &nbsp;|&nbsp; Logs &nbsp;|&nbsp; <tspan fill="#00F5FF">Queue Status</tspan> &nbsp;|&nbsp; Manual Trigger</text><rect x="32" y="82" width="736" height="1" fill="rgba(255,255,255,0.06)"/><rect x="32" y="100" width="170" height="60" rx="4" fill="#0F1520" stroke="rgba(57,255,20,0.2)" stroke-width="1"/><text x="48" y="122" font-family="monospace" font-size="8" fill="#5A6478">// queued</text><text x="48" y="148" font-family="sans-serif" font-size="20" fill="#39FF14" font-weight="700">0</text><rect x="214" y="100" width="170" height="60" rx="4" fill="#0F1520" stroke="rgba(0,245,255,0.2)" stroke-width="1"/><text x="230" y="122" font-family="monospace" font-size="8" fill="#5A6478">// processed today</text><text x="230" y="148" font-family="sans-serif" font-size="20" fill="#00F5FF" font-weight="700">10,247</text><rect x="396" y="100" width="170" height="60" rx="4" fill="#0F1520" stroke="rgba(255,100,100,0.15)" stroke-width="1"/><text x="412" y="122" font-family="monospace" font-size="8" fill="#5A6478">// failed</text><text x="412" y="148" font-family="sans-serif" font-size="20" fill="#E8EDF5" font-weight="700">3</text><rect x="578" y="100" width="190" height="60" rx="4" fill="#0F1520" stroke="rgba(57,255,20,0.2)" stroke-width="1"/><text x="594" y="122" font-family="monospace" font-size="8" fill="#5A6478">// last sync</text><text x="594" y="148" font-family="monospace" font-size="12" fill="#39FF14" font-weight="700">4 min ago</text><rect x="32" y="178" width="736" height="220" rx="4" fill="#0F1520" stroke="rgba(255,255,255,0.06)" stroke-width="1"/><text x="52" y="202" font-family="monospace" font-size="9" fill="#5A6478">timestamp</text><text x="220" y="202" font-family="monospace" font-size="9" fill="#5A6478">type</text><text x="380" y="202" font-family="monospace" font-size="9" fill="#5A6478">record_id</text><text x="530" y="202" font-family="monospace" font-size="9" fill="#5A6478">status</text><text x="660" y="202" font-family="monospace" font-size="9" fill="#5A6478">duration</text><rect x="32" y="210" width="736" height="1" fill="rgba(255,255,255,0.06)"/><text x="52" y="232" font-family="monospace" font-size="8" fill="#8892A4">2024-03-14 09:42:11</text><text x="220" y="232" font-family="monospace" font-size="8" fill="#00F5FF">order_sync</text><text x="380" y="232" font-family="monospace" font-size="8" fill="#8892A4">ORD-7821</text><rect x="518" y="220" width="56" height="18" rx="9" fill="rgba(57,255,20,0.1)"/><text x="538" y="232" font-family="monospace" font-size="7" fill="#39FF14" text-anchor="middle">success</text><text x="660" y="232" font-family="monospace" font-size="8" fill="#8892A4">142ms</text><text x="52" y="260" font-family="monospace" font-size="8" fill="#8892A4">2024-03-14 09:41:58</text><text x="220" y="260" font-family="monospace" font-size="8" fill="#00F5FF">user_reg</text><text x="380" y="260" font-family="monospace" font-size="8" fill="#8892A4">USR-4402</text><rect x="518" y="248" width="56" height="18" rx="9" fill="rgba(57,255,20,0.1)"/><text x="538" y="260" font-family="monospace" font-size="7" fill="#39FF14" text-anchor="middle">success</text><text x="660" y="260" font-family="monospace" font-size="8" fill="#8892A4">88ms</text></svg>` },
    ],
  },

  'payment-gateway': {
    title: 'Payment Gateway Connector',
    category: 'WooCommerce Integration',
    year: '2023',
    tags: ['PHP', 'WooCommerce', 'Webhooks', 'REST'],
    badge: { label: 'Integration', color: 'green' },
    metrics: [{ label: 'Transactions', value: '0 failures' }, { label: 'Refund Time', value: '<2 min' }, { label: 'Uptime', value: '100%' }],
    overview: 'Custom WooCommerce payment gateway plugin for a regional payment provider that had no official WP integration. Built from scratch as a proper WooCommerce gateway extension.',
    challenge: 'Client\'s payment provider had a REST API but no WooCommerce plugin. They were losing sales using a payment link workaround that sent customers off-site with no return path.',
    solution: 'Extended WC_Payment_Gateway to build a first-class native checkout integration — inline payment form, server-side tokenisation, webhook-driven order status updates, and full refund support from the WC admin.',
    techDetail: [
      { label: 'Class',     value: 'Extends WC_Payment_Gateway (WooCommerce standard)' },
      { label: 'Security',  value: 'Server-side tokenisation — card data never touches the server' },
      { label: 'Webhooks',  value: 'Signed webhook verification for all payment events' },
      { label: 'Refunds',   value: 'WC_Order::refund() integrated — refund from WC admin' },
      { label: 'Logging',   value: 'WC_Logger integration for all transaction events' },
    ],
    gallery: [
      { type: 'svg', label: 'Checkout Integration', svg: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="450" fill="#0D1117"/><text x="400" y="40" font-family="monospace" font-size="10" fill="#5A6478" text-anchor="middle" letter-spacing="3">// WOOCOMMERCE CHECKOUT</text><rect x="80" y="60" width="420" height="340" rx="6" fill="#0F1520" stroke="rgba(0,245,255,0.1)" stroke-width="1"/><text x="100" y="90" font-family="monospace" font-size="10" fill="#00F5FF">Payment Method</text><rect x="100" y="102" width="380" height="40" rx="4" fill="rgba(0,245,255,0.08)" stroke="rgba(0,245,255,0.3)" stroke-width="1.5"/><text x="148" y="127" font-family="monospace" font-size="9" fill="#00F5FF">◉ &nbsp;Pay with RegionalPay</text><rect x="100" y="150" width="380" height="40" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/><text x="148" y="175" font-family="monospace" font-size="9" fill="#5A6478">○ &nbsp;Cash on Delivery</text><text x="100" y="218" font-family="monospace" font-size="9" fill="#5A6478">Card Number</text><rect x="100" y="228" width="380" height="36" rx="3" fill="#111820" stroke="rgba(255,255,255,0.08)" stroke-width="1"/><text x="116" y="250" font-family="monospace" font-size="9" fill="#5A6478">•••• •••• •••• 4242</text><text x="100" y="284" font-family="monospace" font-size="9" fill="#5A6478">Expiry</text><rect x="100" y="294" width="170" height="36" rx="3" fill="#111820" stroke="rgba(255,255,255,0.08)" stroke-width="1"/><text x="116" y="316" font-family="monospace" font-size="9" fill="#5A6478">12 / 26</text><text x="300" y="284" font-family="monospace" font-size="9" fill="#5A6478">CVV</text><rect x="300" y="294" width="180" height="36" rx="3" fill="#111820" stroke="rgba(255,255,255,0.08)" stroke-width="1"/><rect x="100" y="350" width="380" height="40" rx="4" fill="#39FF14"/><text x="290" y="375" font-family="monospace" font-size="10" fill="#080b10" text-anchor="middle" font-weight="700">PLACE ORDER →</text><rect x="540" y="60" width="220" height="160" rx="6" fill="#0F1520" stroke="rgba(57,255,20,0.12)" stroke-width="1"/><text x="560" y="88" font-family="monospace" font-size="9" fill="#39FF14">// order_summary</text><text x="560" y="112" font-family="monospace" font-size="9" fill="#5A6478">subtotal:   <tspan fill="#E8EDF5">$89.00</tspan></text><text x="560" y="132" font-family="monospace" font-size="9" fill="#5A6478">shipping:   <tspan fill="#E8EDF5">$5.00</tspan></text><text x="560" y="152" font-family="monospace" font-size="9" fill="#5A6478">tax:        <tspan fill="#E8EDF5">$8.90</tspan></text><rect x="540" y="166" width="220" height="1" fill="rgba(255,255,255,0.08)"/><text x="560" y="188" font-family="monospace" font-size="10" fill="#39FF14">total: $102.90</text></svg>` },
    ],
  },

  'agency-theme': {
    title: 'Agency Website Rebuild',
    category: 'WordPress Custom Theme',
    year: '2023',
    tags: ['Custom Theme', 'ACF', 'WPML', 'PHP'],
    badge: { label: 'WordPress', color: 'cyan' },
    metrics: [{ label: 'PageSpeed', value: '95+' }, { label: 'Languages', value: '3' }, { label: 'Load Time', value: '1.4s' }],
    overview: 'Complete WordPress theme rebuild for a 12-person digital agency. The old site was on a bloated page builder, slow, impossible to update, and had no multilingual support.',
    challenge: 'The agency was embarrassed to send clients to their own website. 4.8s load time, builder-generated HTML, 11 conflicting plugins. Site crashed on every WordPress major update.',
    solution: 'Ground-up custom theme with ACF-powered flexible content fields. Every page section is a custom ACF block. WPML handles multilingual. Theme has zero builder dependency — pure PHP, clean hooks.',
    techDetail: [
      { label: 'Theme',   value: 'Custom PHP theme, no page builder' },
      { label: 'Content', value: 'ACF flexible content fields — 14 custom blocks' },
      { label: 'i18n',    value: 'WPML with custom string translation setup' },
      { label: 'Speed',   value: 'Aggressive asset optimisation — 1.4s load, 95 PageSpeed' },
      { label: 'Deploy',  value: 'Git-integrated staging → production workflow' },
    ],
    gallery: [
      { type: 'svg', label: 'Agency Homepage', svg: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="450" fill="#0D1117"/><rect x="0" y="0" width="800" height="64" fill="#111820" stroke-bottom="1"/><text x="32" y="40" font-family="monospace" font-size="11" fill="#E8EDF5" font-weight="700">[Agency]_</text><text x="500" y="40" font-family="monospace" font-size="9" fill="#5A6478">Services &nbsp; Work &nbsp; About &nbsp; Contact</text><text x="700" y="36" font-family="monospace" font-size="9" fill="#080b10" font-weight="700" text-anchor="middle" dy="0"><tspan><rect x="660" y="25" width="80" height="26" rx="3" fill="#00F5FF"/></tspan></text><text x="700" y="42" font-family="monospace" font-size="9" fill="#080b10" text-anchor="middle" font-weight="700">Get a Quote</text><rect x="0" y="64" width="800" height="220" fill="url(#agGrad)"/><defs><linearGradient id="agGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#0a1520"/><stop offset="100%" stop-color="#080b10"/></linearGradient></defs><text x="80" y="156" font-family="sans-serif" font-size="36" fill="#E8EDF5" font-weight="700">We build digital</text><text x="80" y="200" font-family="sans-serif" font-size="36" fill="#00F5FF" font-weight="700">experiences.</text><text x="80" y="238" font-family="sans-serif" font-size="13" fill="#5A6478">Strategy · Design · Development · Growth</text><rect x="80" y="260" width="150" height="36" rx="4" fill="#00F5FF"/><text x="155" y="282" font-family="monospace" font-size="9" fill="#080b10" text-anchor="middle" font-weight="700">VIEW WORK →</text><rect x="0" y="284" width="800" height="166" fill="#0F1520"/><text x="80" y="320" font-family="monospace" font-size="9" fill="#5A6478" letter-spacing="3">// SERVICES</text><rect x="80" y="336" width="180" height="90" rx="4" fill="#111820" stroke="rgba(0,245,255,0.1)" stroke-width="1"/><rect x="278" y="336" width="180" height="90" rx="4" fill="#111820" stroke="rgba(0,245,255,0.1)" stroke-width="1"/><rect x="476" y="336" width="180" height="90" rx="4" fill="#111820" stroke="rgba(0,245,255,0.1)" stroke-width="1"/><text x="170" y="386" font-family="monospace" font-size="9" fill="#00F5FF" text-anchor="middle">Web Dev</text><text x="368" y="386" font-family="monospace" font-size="9" fill="#00F5FF" text-anchor="middle">UI/UX Design</text><text x="566" y="386" font-family="monospace" font-size="9" fill="#00F5FF" text-anchor="middle">SEO</text></svg>` },
    ],
  },

  'speed-audit': {
    title: 'Speed & Security Overhaul',
    category: 'Audit / Bug Fix / Maintenance',
    year: '2022',
    tags: ['Debugging', 'Security', 'Performance', 'WordPress'],
    badge: { label: 'Bug Fix & Audit', color: 'green' },
    metrics: [{ label: 'Speed Gain', value: '+60%' }, { label: 'Vulnerabilities', value: '0' }, { label: 'Plugin Conflicts', value: 'Resolved' }],
    overview: 'Full technical audit of a WooCommerce store that was crashing under normal traffic. Three undisclosed security vulnerabilities, plugin conflicts causing memory leaks, and a 9.2s mobile load time.',
    challenge: 'Client\'s store was randomly going white-screen during traffic peaks. Hosting company was blaming the theme. Theme developer was blaming the plugins. Meanwhile the store was losing $400/day in missed sales.',
    solution: 'Systematic audit: PHP error logs, Query Monitor profiling, plugin conflict isolation, database query analysis. Found a memory leak in a custom shipping plugin and two SQL injection vectors in an old custom plugin. Patched everything, optimised the DB, implemented caching.',
    techDetail: [
      { label: 'Audit Tools',  value: 'Query Monitor, WP-CLI, Xdebug, PHP error logs' },
      { label: 'Root Cause',   value: 'Memory leak in custom shipping plugin + N+1 query loop' },
      { label: 'Security',     value: '2x SQL injection, 1x XSS — all patched with $wpdb->prepare()' },
      { label: 'Caching',      value: 'Redis object cache + WP Rocket full-page cache' },
      { label: 'Result',       value: '9.2s → 3.6s load time. Zero crashes in 90 days since.' },
    ],
    gallery: [
      { type: 'svg', label: 'Before / After Metrics', svg: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="450" fill="#0D1117"/><text x="400" y="44" font-family="monospace" font-size="10" fill="#5A6478" text-anchor="middle" letter-spacing="3">// BEFORE → AFTER</text><rect x="60" y="70" width="300" height="280" rx="6" fill="#0F1520" stroke="rgba(255,80,80,0.2)" stroke-width="1"/><text x="210" y="100" font-family="monospace" font-size="10" fill="#f87171" text-anchor="middle">BEFORE</text><text x="90" y="136" font-family="monospace" font-size="9" fill="#5A6478">load_time:      <tspan fill="#f87171">9.2s</tspan></text><text x="90" y="162" font-family="monospace" font-size="9" fill="#5A6478">mobile_score:   <tspan fill="#f87171">22</tspan></text><text x="90" y="188" font-family="monospace" font-size="9" fill="#5A6478">memory_usage:   <tspan fill="#f87171">512MB peak</tspan></text><text x="90" y="214" font-family="monospace" font-size="9" fill="#5A6478">db_queries/pg:  <tspan fill="#f87171">340+</tspan></text><text x="90" y="240" font-family="monospace" font-size="9" fill="#5A6478">vulnerabilities: <tspan fill="#f87171">3</tspan></text><text x="90" y="266" font-family="monospace" font-size="9" fill="#5A6478">white_screen:   <tspan fill="#f87171">daily</tspan></text><text x="90" y="310" font-family="monospace" font-size="9" fill="#5A6478">status:         <tspan fill="#f87171">🔴 CRITICAL</tspan></text><rect x="440" y="70" width="300" height="280" rx="6" fill="#0F1520" stroke="rgba(57,255,20,0.2)" stroke-width="1"/><text x="590" y="100" font-family="monospace" font-size="10" fill="#39FF14" text-anchor="middle">AFTER</text><text x="470" y="136" font-family="monospace" font-size="9" fill="#5A6478">load_time:      <tspan fill="#39FF14">3.6s (-61%)</tspan></text><text x="470" y="162" font-family="monospace" font-size="9" fill="#5A6478">mobile_score:   <tspan fill="#39FF14">87 (+295%)</tspan></text><text x="470" y="188" font-family="monospace" font-size="9" fill="#5A6478">memory_usage:   <tspan fill="#39FF14">128MB stable</tspan></text><text x="470" y="214" font-family="monospace" font-size="9" fill="#5A6478">db_queries/pg:  <tspan fill="#39FF14">48 (-86%)</tspan></text><text x="470" y="240" font-family="monospace" font-size="9" fill="#5A6478">vulnerabilities: <tspan fill="#39FF14">0</tspan></text><text x="470" y="266" font-family="monospace" font-size="9" fill="#5A6478">white_screen:   <tspan fill="#39FF14">never (90d)</tspan></text><text x="470" y="310" font-family="monospace" font-size="9" fill="#5A6478">status:         <tspan fill="#39FF14">🟢 STABLE</tspan></text><path d="M370 230 L430 230" stroke="rgba(255,255,255,0.2)" stroke-width="2" stroke-dasharray="4 3"/><text x="400" y="226" font-family="monospace" font-size="9" fill="#5A6478" text-anchor="middle">→</text></svg>` },
    ],
  },

  'shopify-inventory': {
    title: 'Inventory Sync Integration',
    category: 'Shopify + API Integration',
    year: '2022',
    tags: ['Shopify API', 'REST', 'Cron', 'PHP'],
    badge: { label: 'Shopify + API', color: 'green' },
    metrics: [{ label: 'Sync Frequency', value: '5 min' }, { label: 'SKUs Managed', value: '500+' }, { label: 'Data Accuracy', value: '100%' }],
    overview: 'Real-time inventory sync between a Shopify store and a proprietary warehouse management system. Client was manually updating stock levels — taking 2 hours daily and causing frequent overselling.',
    challenge: 'WMS had no native Shopify connection. Stock levels changed constantly throughout the day. Oversells were leading to order cancellations, refunds, and lost customer trust.',
    solution: 'PHP cron service polling the WMS REST API every 5 minutes and pushing deltas to Shopify via the Admin API. Includes a conflict resolution layer (WMS is always source of truth) and Slack alerts on sync failures.',
    techDetail: [
      { label: 'Polling',   value: 'PHP cron — 5-minute interval, delta-only updates' },
      { label: 'Shopify',   value: 'Admin API — inventory_levels/set.json endpoint' },
      { label: 'Conflict',  value: 'WMS is source of truth — Shopify never wins on mismatch' },
      { label: 'Alerts',    value: 'Slack webhook on sync failure or >10% variance' },
      { label: 'Logging',   value: 'Full sync history stored — last 30 days queryable' },
    ],
    gallery: [
      { type: 'svg', label: 'Sync Flow Diagram', svg: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="450" fill="#0D1117"/><text x="400" y="40" font-family="monospace" font-size="10" fill="#5A6478" text-anchor="middle" letter-spacing="3">// INVENTORY SYNC FLOW</text><rect x="40" y="80" width="160" height="80" rx="6" fill="#0F1520" stroke="rgba(57,255,20,0.2)" stroke-width="1"/><text x="120" y="116" font-family="monospace" font-size="10" fill="#39FF14" text-anchor="middle">Warehouse</text><text x="120" y="136" font-family="monospace" font-size="9" fill="#5A6478" text-anchor="middle">WMS REST API</text><rect x="320" y="80" width="160" height="80" rx="6" fill="#0F1520" stroke="rgba(0,245,255,0.3)" stroke-width="1.5"/><text x="400" y="116" font-family="monospace" font-size="10" fill="#00F5FF" text-anchor="middle">Sync Engine</text><text x="400" y="136" font-family="monospace" font-size="9" fill="#5A6478" text-anchor="middle">PHP Cron / 5min</text><rect x="600" y="80" width="160" height="80" rx="6" fill="#0F1520" stroke="rgba(57,255,20,0.2)" stroke-width="1"/><text x="680" y="116" font-family="monospace" font-size="10" fill="#39FF14" text-anchor="middle">Shopify Store</text><text x="680" y="136" font-family="monospace" font-size="9" fill="#5A6478" text-anchor="middle">Admin API</text><line x1="200" y1="120" x2="320" y2="120" stroke="rgba(0,245,255,0.4)" stroke-width="1.5" marker-end="url(#arr)"/><text x="260" y="112" font-family="monospace" font-size="8" fill="#00F5FF" text-anchor="middle">pull stock</text><line x1="480" y1="120" x2="600" y2="120" stroke="rgba(57,255,20,0.4)" stroke-width="1.5"/><text x="540" y="112" font-family="monospace" font-size="8" fill="#39FF14" text-anchor="middle">push delta</text><rect x="280" y="220" width="240" height="120" rx="6" fill="#111820" stroke="rgba(0,245,255,0.12)" stroke-width="1"/><text x="400" y="248" font-family="monospace" font-size="9" fill="#00F5FF" text-anchor="middle">// conflict_resolution</text><text x="400" y="270" font-family="monospace" font-size="8" fill="#5A6478" text-anchor="middle">WMS always wins</text><text x="400" y="290" font-family="monospace" font-size="8" fill="#5A6478" text-anchor="middle">delta-only updates</text><text x="400" y="310" font-family="monospace" font-size="8" fill="#39FF14" text-anchor="middle">✓ zero oversells since deploy</text><text x="400" y="410" font-family="monospace" font-size="9" fill="#5A6478" text-anchor="middle">500+ SKUs · 5-min cadence · 30-day sync log</text></svg>` },
    ],
  },

  'membership-plugin': {
    title: 'Membership & Access Plugin',
    category: 'WordPress Plugin Dev',
    year: '2022',
    tags: ['PHP OOP', 'Stripe', 'WordPress', 'MySQL'],
    badge: { label: 'Plugin Dev', color: 'cyan' },
    metrics: [{ label: 'Active Members', value: '300+' }, { label: 'Plans', value: '4' }, { label: 'Churn', value: '<3%' }],
    overview: 'Custom WordPress membership plugin for a professional community. Members pay via Stripe subscriptions and get role-based access to gated content — courses, downloads, and community forums.',
    challenge: 'Client evaluated MemberPress, Restrict Content Pro, and Paid Memberships Pro. All had too much bloat, conflicted with their existing theme customisations, and charged per-site licensing fees that didn\'t make sense at their scale.',
    solution: 'Custom plugin extending WP\'s user role system. Stripe Billing for subscription management, webhook-driven role assignment/revocation, custom shortcodes for content gating, and a member dashboard.',
    techDetail: [
      { label: 'Billing',   value: 'Stripe Billing — subscriptions, trials, proration' },
      { label: 'Access',    value: 'WP role system — roles assigned on payment, revoked on cancel' },
      { label: 'Webhooks',  value: 'Stripe webhook — customer.subscription.* events' },
      { label: 'Gating',    value: 'Shortcode + block-level content restriction' },
      { label: 'Dashboard', value: 'Custom /my-account extension — plan, billing, invoices' },
    ],
    gallery: [
      { type: 'svg', label: 'Member Dashboard', svg: `<svg viewBox="0 0 800 450" xmlns="http://www.w3.org/2000/svg"><rect width="800" height="450" fill="#0D1117"/><rect x="0" y="0" width="800" height="56" fill="#111820"/><text x="32" y="34" font-family="monospace" font-size="11" fill="#E8EDF5" font-weight="700">[Site]_ &nbsp; <tspan font-size="9" fill="#5A6478">Courses · Community · Downloads · My Account</tspan></text><text x="32" y="88" font-family="monospace" font-size="9" fill="#5A6478" letter-spacing="3">// MY ACCOUNT</text><text x="32" y="112" font-family="sans-serif" font-size="18" fill="#E8EDF5" font-weight="600">Welcome back, Uddhav</text><rect x="32" y="132" width="200" height="80" rx="4" fill="#0F1520" stroke="rgba(0,245,255,0.15)" stroke-width="1"/><text x="52" y="158" font-family="monospace" font-size="8" fill="#5A6478">// current_plan</text><text x="52" y="180" font-family="sans-serif" font-size="14" fill="#00F5FF" font-weight="700">Pro Member</text><text x="52" y="200" font-family="monospace" font-size="8" fill="#5A6478">renews: Apr 14, 2025</text><rect x="248" y="132" width="200" height="80" rx="4" fill="#0F1520" stroke="rgba(57,255,20,0.15)" stroke-width="1"/><text x="268" y="158" font-family="monospace" font-size="8" fill="#5A6478">// billing</text><text x="268" y="180" font-family="sans-serif" font-size="14" fill="#39FF14" font-weight="700">$29/mo</text><text x="268" y="200" font-family="monospace" font-size="8" fill="#5A6478">via Stripe · Visa ••4242</text><rect x="32" y="232" width="736" height="28" rx="3" fill="#111820"/><text x="52" y="250" font-family="monospace" font-size="9" fill="#00F5FF">Accessible Content (Pro Plan)</text><rect x="32" y="270" width="225" height="120" rx="4" fill="#0F1520" stroke="rgba(0,245,255,0.1)" stroke-width="1"/><text x="52" y="296" font-family="monospace" font-size="8" fill="#5A6478">Advanced WordPress Dev</text><rect x="52" y="308" width="120" height="6" rx="3" fill="rgba(0,245,255,0.2)"/><rect x="52" y="308" width="72" height="6" rx="3" fill="#00F5FF"/><text x="52" y="332" font-family="monospace" font-size="8" fill="#5A6478">Progress: 60%</text><rect x="268" y="270" width="225" height="120" rx="4" fill="#0F1520" stroke="rgba(57,255,20,0.1)" stroke-width="1"/><text x="288" y="296" font-family="monospace" font-size="8" fill="#5A6478">Shopify Mastery Course</text><rect x="288" y="308" width="120" height="6" rx="3" fill="rgba(57,255,20,0.2)"/><rect x="288" y="308" width="30" height="6" rx="3" fill="#39FF14"/><text x="288" y="332" font-family="monospace" font-size="8" fill="#5A6478">Progress: 25%</text></svg>` },
    ],
  },
};

// ─── Modal Engine ──────────────────────────────────────────────────────────────
const modal     = document.getElementById('project-modal');
const modalInner = document.getElementById('modal-inner');
let currentGalleryIndex = 0;
let currentGalleryImages = [];
let touchStartX = 0;

function openModal(projectId) {
  const p = PROJECTS[projectId];
  if (!p) return;

  currentGalleryImages = p.gallery;
  currentGalleryIndex  = 0;

  const badgeColor = p.badge.color === 'cyan'
    ? 'border:1px solid rgba(0,245,255,0.3);color:var(--cyan);background:var(--cyan-dim);'
    : 'border:1px solid rgba(57,255,20,0.3);color:var(--green);background:var(--green-dim);';

  modalInner.innerHTML = `
    <!-- Header -->
    <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:1rem;padding:1.75rem 2rem;border-bottom:1px solid var(--border-soft);">
      <div style="flex:1;min-width:0;">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.625rem;flex-wrap:wrap;">
          <span style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.08em;text-transform:uppercase;padding:0.2rem 0.6rem;border-radius:3px;${badgeColor}">${p.badge.label}</span>
          <span style="font-family:var(--font-mono);font-size:0.65rem;color:var(--text-muted);">${p.category}</span>
          <span style="font-family:var(--font-mono);font-size:0.65rem;color:var(--text-muted);">// ${p.year}</span>
        </div>
        <h2 style="font-family:var(--font-sans);font-size:1.5rem;font-weight:700;letter-spacing:-0.02em;color:var(--text);margin:0;">${p.title}</h2>
      </div>
      <button id="modal-close" aria-label="Close" style="flex-shrink:0;background:rgba(255,255,255,0.04);border:1px solid var(--border-soft);border-radius:6px;padding:0.5rem;cursor:pointer;color:var(--text-muted);transition:all 0.2s;display:flex;align-items:center;justify-content:center;">
        <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
    </div>

    <!-- Scrollable body -->
    <div style="overflow-y:auto;flex:1;min-height:0;">

      <!-- Gallery -->
      <div style="position:relative;background:var(--bg);border-bottom:1px solid var(--border-soft);">
        <div id="gallery-viewport" style="overflow:hidden;position:relative;">
          <div id="gallery-track" style="display:flex;transition:transform 0.4s cubic-bezier(0.16,1,0.3,1);">
            ${p.gallery.map((img, i) => `
              <div style="flex-shrink:0;width:100%;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;">
                ${img.type === 'svg'
                  ? `<div style="width:100%;aspect-ratio:16/9;overflow:hidden;">${img.svg}</div>`
                  : `<img src="${img.src}" alt="${img.label}" style="width:100%;height:100%;object-fit:cover;">`
                }
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Gallery controls -->
        ${p.gallery.length > 1 ? `
          <button id="gallery-prev" aria-label="Previous" style="position:absolute;left:1rem;top:50%;transform:translateY(-50%);background:rgba(8,11,16,0.8);border:1px solid var(--border-soft);border-radius:6px;padding:0.5rem 0.6rem;cursor:pointer;color:var(--text);backdrop-filter:blur(8px);transition:border-color 0.2s;">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button id="gallery-next" aria-label="Next" style="position:absolute;right:1rem;top:50%;transform:translateY(-50%);background:rgba(8,11,16,0.8);border:1px solid var(--border-soft);border-radius:6px;padding:0.5rem 0.6rem;cursor:pointer;color:var(--text);backdrop-filter:blur(8px);transition:border-color 0.2s;">
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6"/></svg>
          </button>
          <div id="gallery-dots" style="position:absolute;bottom:0.75rem;left:50%;transform:translateX(-50%);display:flex;gap:0.4rem;">
            ${p.gallery.map((_, i) => `<button class="gdot" data-idx="${i}" style="width:${i===0?'20px':'8px'};height:8px;border-radius:100px;border:none;cursor:pointer;background:${i===0?'var(--cyan)':'rgba(255,255,255,0.2)'};padding:0;transition:all 0.2s;"></button>`).join('')}
          </div>
          <div id="gallery-label" style="position:absolute;top:0.75rem;right:0.875rem;font-family:var(--font-mono);font-size:0.65rem;color:rgba(255,255,255,0.5);background:rgba(8,11,16,0.7);padding:0.2rem 0.6rem;border-radius:3px;backdrop-filter:blur(4px);">
            ${p.gallery[0].label}
          </div>
        ` : ''}
      </div>

      <!-- Metrics -->
      <div class="modal-metrics" style="display:grid;grid-template-columns:repeat(${p.metrics.length},1fr);gap:0;border-bottom:1px solid var(--border-soft);">
        ${p.metrics.map((m, i) => `
          <div style="padding:1rem 1.5rem;${i < p.metrics.length - 1 ? 'border-right:1px solid var(--border-soft);' : ''}text-align:center;">
            <div style="font-family:var(--font-sans);font-size:1.5rem;font-weight:700;letter-spacing:-0.03em;color:${i % 2 === 0 ? 'var(--cyan)' : 'var(--green)'};">${m.value}</div>
            <div style="font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--text-muted);margin-top:0.2rem;">${m.label}</div>
          </div>
        `).join('')}
      </div>

      <!-- Content grid -->
      <div class="modal-content-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:0;border-bottom:1px solid var(--border-soft);">

        <!-- Left col -->
        <div style="padding:1.75rem;border-right:1px solid var(--border-soft);">
          <p style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--cyan);margin-bottom:0.875rem;">// overview</p>
          <p style="font-size:0.875rem;line-height:1.7;color:var(--text-soft);margin-bottom:1.5rem;">${p.overview}</p>

          <p style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.875rem;">// the_challenge</p>
          <p style="font-size:0.875rem;line-height:1.7;color:var(--text-muted);">${p.challenge}</p>
        </div>

        <!-- Right col -->
        <div style="padding:1.75rem;">
          <p style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--green);margin-bottom:0.875rem;">// the_solution</p>
          <p style="font-size:0.875rem;line-height:1.7;color:var(--text-soft);margin-bottom:1.5rem;">${p.solution}</p>

          <p style="font-family:var(--font-mono);font-size:0.65rem;letter-spacing:0.12em;text-transform:uppercase;color:var(--text-muted);margin-bottom:0.875rem;">// tech_detail</p>
          <div style="display:flex;flex-direction:column;gap:0.5rem;">
            ${p.techDetail.map(t => `
              <div style="display:flex;gap:0.75rem;font-size:0.8rem;">
                <span style="font-family:var(--font-mono);color:var(--text-muted);min-width:90px;flex-shrink:0;">${t.label}:</span>
                <span style="color:var(--text-soft);">${t.value}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Tags + CTA -->
      <div class="modal-footer" style="padding:1.5rem 2rem;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;">
        <div style="display:flex;flex-wrap:wrap;gap:0.375rem;">
          ${p.tags.map(tag => `<span style="font-family:var(--font-mono);font-size:0.62rem;letter-spacing:0.06em;text-transform:uppercase;padding:0.25rem 0.6rem;border-radius:3px;border:1px solid var(--border-soft);color:var(--text-muted);background:var(--bg-2);">${tag}</span>`).join('')}
        </div>
        <a href="contact.html" class="modal-cta" style="font-family:var(--font-mono);font-size:0.72rem;letter-spacing:0.08em;text-transform:uppercase;background:var(--cyan);color:var(--bg);padding:0.625rem 1.5rem;border-radius:4px;text-decoration:none;font-weight:700;transition:all 0.2s;display:inline-flex;align-items:center;justify-content:center;">
          Start Similar Project →
        </a>
      </div>

    </div>`;

  // Wire close
  document.getElementById('modal-close').addEventListener('click', closeModal);

  // Wire gallery nav
  if (p.gallery.length > 1) {
    document.getElementById('gallery-prev').addEventListener('click', () => shiftGallery(-1));
    document.getElementById('gallery-next').addEventListener('click', () => shiftGallery(1));
    document.querySelectorAll('.gdot').forEach(dot => {
      dot.addEventListener('click', () => goToSlide(parseInt(dot.dataset.idx)));
    });
  }

  // Touch swipe
  const vp = document.getElementById('gallery-viewport');
  vp?.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  vp?.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) shiftGallery(diff > 0 ? 1 : -1);
  });

  // Show
  modal.style.display = 'flex';
  requestAnimationFrame(() => {
    modal.style.opacity = '1';
    modalInner.style.transform = 'translateY(0)';
  });
  document.body.style.overflow = 'hidden';
}

function goToSlide(idx) {
  currentGalleryIndex = idx;
  const track = document.getElementById('gallery-track');
  if (track) track.style.transform = `translateX(-${idx * 100}%)`;
  document.querySelectorAll('.gdot').forEach((d, i) => {
    d.style.width    = i === idx ? '20px' : '8px';
    d.style.background = i === idx ? 'var(--cyan)' : 'rgba(255,255,255,0.2)';
  });
  const label = document.getElementById('gallery-label');
  if (label) label.textContent = currentGalleryImages[idx]?.label ?? '';
}

function shiftGallery(dir) {
  const total = currentGalleryImages.length;
  goToSlide((currentGalleryIndex + dir + total) % total);
}

function closeModal() {
  modal.style.opacity = '0';
  modalInner.style.transform = 'translateY(24px)';
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 280);
}

// ─── Card click wiring ────────────────────────────────────────────────────────
document.querySelectorAll('.portfolio-item').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    const id = card.dataset.projectId;
    if (id) openModal(id);
  });
});

// ─── Keyboard navigation ──────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (modal.style.display !== 'flex') return;
  if (e.key === 'Escape')      closeModal();
  if (e.key === 'ArrowLeft')   shiftGallery(-1);
  if (e.key === 'ArrowRight')  shiftGallery(1);
});

// ─── Backdrop click to close ──────────────────────────────────────────────────
modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});
