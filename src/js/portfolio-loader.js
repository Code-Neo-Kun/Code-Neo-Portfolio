/* ═══════════════════════════════════════════════════════════
   PORTFOLIO DETAIL LOADER — portfolio-loader.js
   Reads ?slug= from the URL and renders the matching case study.
   Default fallback: rest-api-sync-plugin (full content in HTML).
   All other projects have full bodyHTML defined here.
═══════════════════════════════════════════════════════════ */

/* ── SHARED HELPERS ──────────────────────────────────────── */
function taskItem(text) {
  return `<div class="cs-task-item">
    <div class="cs-task-icon"><svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></div>
    <div>${text}</div>
  </div>`;
}
function problemCard(icon, title, body) {
  return `<div class="cs-problem-card"><div class="cs-problem-icon">${icon}</div><h3>${title}</h3><p>${body}</p></div>`;
}
function codeBlock(lang, code) {
  return `<div class="post-code-block"><div class="post-code-header"><span class="post-code-lang">${lang}</span><button class="post-code-copy">Copy</button></div><pre><code>${code}</code></pre></div>`;
}
function callout(type, icon, html) {
  return `<div class="post-callout post-callout--${type}"><div class="post-callout-icon">${icon}</div><div>${html}</div></div>`;
}
function resultCard(val, key, note) {
  return `<div class="cs-result-card"><div class="cs-result-val">${val}</div><div class="cs-result-key">${key}</div><p class="cs-result-note">${note}</p></div>`;
}
function tableRow(...cells) {
  return `<tr>${cells.map((c, i) => i === 0 ? `<td><strong>${c}</strong></td>` : `<td>${c}</td>`).join('')}</tr>`;
}

/* ── CASE STUDY BODY BUILDERS ────────────────────────────── */
function buildBody(sections, tags, prevSlug, prevTitle, nextSlug, nextTitle) {
  const tagHtml = tags.map(t => `<span class="ptag">${t}</span>`).join('');
  const nav = `
    <nav class="post-nav reveal" aria-label="Project navigation">
      <a href="portfolio-detail.html?slug=${prevSlug}" class="post-nav-item post-nav-prev">
        <span class="post-nav-dir"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 12H5M12 5l-7 7 7 7"/></svg> Previous</span>
        <span class="post-nav-title">${prevTitle}</span>
      </a>
      <a href="portfolio-detail.html?slug=${nextSlug}" class="post-nav-item post-nav-next">
        <span class="post-nav-dir">Next <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
        <span class="post-nav-title">${nextTitle}</span>
      </a>
    </nav>`;
  return `
    <div class="reading-progress" id="reading-progress"></div>
    ${sections.join('\n')}
    <div class="post-tags reveal">
      <span class="post-tags-label">Tags:</span>${tagHtml}
    </div>
    ${nav}`;
}

function overviewBar(client, timeline, role, stack) {
  return `<div class="cs-overview-bar reveal">
    <div class="cs-overview-item"><span class="cs-overview-label">Client</span><span class="cs-overview-val">${client}</span></div>
    <div class="cs-overview-item"><span class="cs-overview-label">Timeline</span><span class="cs-overview-val">${timeline}</span></div>
    <div class="cs-overview-item"><span class="cs-overview-label">My Role</span><span class="cs-overview-val">${role}</span></div>
    <div class="cs-overview-item"><span class="cs-overview-label">Stack</span><span class="cs-overview-val">${stack}</span></div>
  </div>`;
}

function section(num, label, heading, html, modifier = '') {
  return `<div class="cs-section reveal" id="cs-${num}">
    <div class="cs-section-label${modifier ? ' cs-section-label--' + modifier : ''}">
      <span class="cs-step-num">0${num}</span>
      <span class="cs-step-title">${label}</span>
    </div>
    <h2 class="cs-section-heading">${heading}</h2>
    ${html}
  </div>`;
}

/* ── PROJECT DATA ────────────────────────────────────────── */
const PROJECTS = {

  /* ── 1. REST API SYNC (default — body lives in HTML) ── */
  'rest-api-sync-plugin': {
    title: 'CRM ↔ WordPress REST API Sync Plugin',
    subtitle: 'How I replaced a failing Zapier integration with a zero-loss OOP plugin handling bidirectional CRM sync at 10k+ records per day.',
    description: 'How I replaced a failing Zapier integration with a robust OOP WordPress plugin handling bidirectional CRM sync — 10k+ records daily, zero data loss.',
    category: 'PLUGIN DEV', year: '2023', type: 'Custom WordPress Plugin',
    heroImg: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1400&h=700&fit=crop',
    heroImgAlt: 'CRM REST API Sync Plugin',
    metrics: [
      { val: '10k+', key: 'Records/Day' }, { val: '0', key: 'Data Failures' },
      { val: '<5min', key: 'Sync Lag' },   { val: '99.9%', key: 'Uptime' },
    ],
    duration: '3 weeks', client: 'SaaS CRM Company', role: 'Sole Developer', stack: 'PHP 8.1 · WP REST API · MySQL · WP-Cron',
    // bodyHTML omitted → static HTML in portfolio-detail.html is used
  },

  /* ── 2. E-COMMERCE FASHION STORE ─────────────────────── */
  'ecommerce-fashion-store': {
    title: 'E-Commerce Fashion Store',
    subtitle: 'Multi-vendor WooCommerce marketplace with Stripe Connect split payouts, vendor dashboards, and a custom PHP OOP plugin — built from scratch.',
    description: 'Multi-vendor WooCommerce marketplace built from scratch with custom plugin, Stripe Connect payouts, and automated order routing.',
    category: 'WOOCOMMERCE', year: '2024', type: 'WordPress / WooCommerce',
    heroImg: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&h=700&fit=crop',
    heroImgAlt: 'E-Commerce fashion store',
    metrics: [
      { val: '+40%', key: 'GMV Growth' }, { val: '12', key: 'Vendors' },
      { val: '99.9%', key: 'Uptime' },   { val: '3wk', key: 'Delivery' },
    ],
    duration: '3 weeks', client: 'Online Fashion Brand', role: 'Sole Developer', stack: 'PHP 8.1 · WooCommerce · Stripe Connect · MySQL',
    get bodyHTML() { return buildBody([
      overviewBar(this.client, this.duration, this.role, this.stack),
      section(1, 'THE TASK', 'What the client needed', `
        <p class="cs-lead">A fashion brand selling handmade goods had grown beyond a single-seller WooCommerce setup. They needed multiple independent vendors to manage their own stock, receive their own payouts, and work within an isolated admin dashboard — all inside one storefront.</p>
        <div class="cs-task-list">
          ${taskItem('<strong>Multi-vendor storefront</strong> — vendors list products independently, orders route automatically to the correct seller.')}
          ${taskItem('<strong>Stripe Connect split payouts</strong> — commission deducted automatically at transaction time, vendor receives remainder.')}
          ${taskItem('<strong>Vendor onboarding flow</strong> — self-serve registration, admin approval, and Stripe Connect account linking.')}
          ${taskItem('<strong>No marketplace plugin dependency</strong> — must not conflict with existing WooCommerce customisations.')}
        </div>`),
      section(2, 'THE PROBLEM', 'What was blocking them', `
        <div class="cs-problem-grid">
          ${problemCard('🔌', 'Plugin Conflicts', 'Every marketplace plugin they tried (Dokan, WC Vendors) conflicted with their existing custom checkout flow and wiped out custom order metadata.')}
          ${problemCard('💸', 'Stripe Workaround', 'Payouts were being done manually — the admin transferred vendor earnings via bank transfer at month end. Error-prone and time-consuming.')}
          ${problemCard('👤', 'No Vendor Visibility', 'Vendors had no dashboard. They had to email the admin to check their order status, product performance, or payout history.')}
          ${problemCard('📦', 'Order Routing Gaps', 'When a customer ordered from multiple vendors in one cart, fulfilment emails went to the store owner only — vendors never knew about new orders.')}
        </div>
        ${callout('warn', '⚠️', 'The existing store had been running manual payouts for 8 months. An audit found <strong>£4,200 in unreconciled vendor earnings</strong> sitting in the store owner\'s account.')}
      `),
      section(3, 'THE SOLUTION', 'How I built it', `
        <p>I built a standalone OOP WooCommerce extension — <code>neo-marketplace</code> — that layers multi-vendor capability on top of native WooCommerce without replacing core functionality.</p>
        <h3>Architecture</h3>
        <p>Each vendor is a WordPress user with a custom <code>vendor</code> role. Products are assigned to vendors via <code>wp_postmeta</code>. A custom database table tracks commission splits per order line item. WooCommerce order hooks fire the Stripe Connect transfer on payment completion.</p>
        ${codeBlock('PHP', `<span class="code-comment">// Split payout on order completion</span>
<span class="code-fn">add_action</span>( <span class="code-str">'woocommerce_order_status_completed'</span>, <span class="code-kw">function</span>( <span class="code-var">$order_id</span> ) {
    <span class="code-var">$splits</span> = Neo_Marketplace\\Commission::get_splits( <span class="code-var">$order_id</span> );
    <span class="code-kw">foreach</span> ( <span class="code-var">$splits</span> <span class="code-kw">as</span> <span class="code-var">$split</span> ) {
        Stripe\\Transfer::create([
            <span class="code-str">'amount'</span>      => <span class="code-var">$split</span>->vendor_amount_cents,
            <span class="code-str">'currency'</span>    => <span class="code-str">'gbp'</span>,
            <span class="code-str">'destination'</span> => <span class="code-var">$split</span>->stripe_account_id,
        ]);
    }
} );`)}
        <h3>Vendor Dashboard</h3>
        <p>A custom WordPress admin area (registered via <code>add_menu_page()</code>) shows each vendor only their own products, orders, and earnings. Built with native WP List Tables — no external UI library, loads fast.</p>
        <h3>Order Routing</h3>
        <p>On new order, the plugin groups line items by vendor and sends a fulfilment email to each vendor containing only their items. The customer gets one combined receipt as normal.</p>
      `),
      section(4, 'THE RESULTS', 'What changed after launch', `
        <div class="cs-results-grid">
          ${resultCard('+40%', 'GMV in 3 months', 'Vendor count grew from 3 to 12 once onboarding became self-serve. More vendors = more product variety = more sales.')}
          ${resultCard('£0', 'Manual payout work', 'Every payout is now automatic via Stripe Connect. The store owner\'s monthly reconciliation went from 4 hours to zero.')}
          ${resultCard('12', 'Active vendors', 'All onboarded within 2 weeks of launch using the self-serve registration and Stripe Connect linking flow.')}
          ${resultCard('99.9%', 'Order routing accuracy', 'Zero missed vendor fulfilment emails across 600+ orders in the first quarter.')}
        </div>
        ${callout('success', '✅', '<strong>Client feedback:</strong> "We\'d been putting this off for two years because every plugin broke something. Neo built it cleanly from scratch and our vendors love the dashboard. We wish we\'d done it sooner."')}
      `),
      section(5, 'TECH BREAKDOWN', 'How it\'s built under the hood', `
        <div class="post-table-wrap"><table class="post-table">
          <thead><tr><th>Layer</th><th>Approach</th><th>Why</th></tr></thead>
          <tbody>
            ${tableRow('Plugin structure', 'OOP PHP 8.1, autoloaded via Composer', 'Clean namespace separation, testable units')}
            ${tableRow('Vendor roles', 'Custom WP user role + capabilities', 'Native WP role system, no extra auth plugins')}
            ${tableRow('Commission storage', 'Custom <code>wp_neo_commissions</code> table', 'Fast per-order queries, no postmeta overhead')}
            ${tableRow('Payouts', 'Stripe Connect (Express accounts)', 'Vendors keep their own Stripe accounts, instant transfers')}
            ${tableRow('Dashboard', 'WP Admin with List Tables API', 'Native WP UI, no JS framework, fast load')}
            ${tableRow('Order routing', '<code>woocommerce_new_order</code> hook', 'Fires before status transitions, reliable trigger point')}
          </tbody>
        </table></div>
      `)
    ], ['WordPress', 'WooCommerce', 'PHP OOP', 'Stripe Connect', 'MySQL'],
    'business-consulting-website', 'Business Consulting Website',
    'shopify-fashion-brand', 'Shopify Fashion Brand Storefront'); }
  },

  /* ── 3. BUSINESS CONSULTING WEBSITE ─────────────────── */
  'business-consulting-website': {
    title: 'Business Consulting Website',
    subtitle: 'Full custom WordPress theme for a 4-person consulting firm — rebuilt from a broken page builder into a 97 PageSpeed, multilingual, lead-generating site.',
    description: 'Fast, SEO-optimised WordPress site for a business consulting firm with ACF-driven content, WPML multilingual, booking integration, and 97 PageSpeed score.',
    category: 'WORDPRESS', year: '2024', type: 'WordPress Development',
    heroImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&h=700&fit=crop',
    heroImgAlt: 'Business consulting website',
    metrics: [
      { val: '97', key: 'PageSpeed' }, { val: '1.4s', key: 'Load Time' },
      { val: '3', key: 'Languages' }, { val: '+34%', key: 'Lead Rate' },
    ],
    duration: '4 weeks', client: 'Business Consulting Firm (UK)', role: 'Sole Developer', stack: 'WordPress · PHP · ACF · WPML · Calendly API',
    get bodyHTML() { return buildBody([
      overviewBar(this.client, this.duration, this.role, this.stack),
      section(1, 'THE TASK', 'What the client needed', `
        <p class="cs-lead">A UK-based consulting firm serving clients across three countries needed a website that matched their premium positioning. Their existing site was built on a page builder, loaded in 4.8 seconds, and had no multilingual support. Potential clients in France and Germany were seeing an English-only site.</p>
        <div class="cs-task-list">
          ${taskItem('<strong>Custom WordPress theme</strong> — no page builder, clean HTML output, fully brand-aligned design.')}
          ${taskItem('<strong>WPML multilingual</strong> — English, French, and German with proper hreflang and separate URL structure.')}
          ${taskItem('<strong>Calendly booking integration</strong> — embedded discovery call scheduler on the contact page, firing a GA4 event on booking.')}
          ${taskItem('<strong>Lead capture forms</strong> — multi-step enquiry form with conditional fields based on service type, posted to the CRM via webhook.')}
        </div>`),
      section(2, 'THE PROBLEM', 'The old site was costing them business', `
        <div class="cs-problem-grid">
          ${problemCard('🐢', '4.8s Load Time', 'The Elementor build loaded 2.3MB of CSS and 14 blocking JS files. Mobile score was 31/100. Prospects were bouncing before the hero loaded.')}
          ${problemCard('🌍', 'English Only', 'Their French and German clients were reading machine-translated PDFs. No localised web presence meant they weren\'t ranking in European search.')}
          ${problemCard('📅', 'No Online Booking', 'Discovery calls were arranged by email only. On average, 3 back-and-forth emails to confirm a single slot — a known friction point the partners wanted to fix.')}
          ${problemCard('🔧', 'Unmaintainable', 'The Elementor template used 6 nested sections per block. Changing the primary colour required 47 manual updates across the page builder.')}
        </div>
      `),
      section(3, 'THE SOLUTION', 'A ground-up custom theme', `
        <p>Built a custom WordPress theme from scratch using a clean PHP template hierarchy. All repeatable content areas (service cards, team bios, case study teasers) are ACF Flexible Content blocks — editable by the client without touching code.</p>
        <h3>Performance Strategy</h3>
        <p>Zero page builder. All CSS is purpose-written — no utility class bloat. Hero LCP image uses <code>fetchpriority="high"</code> and is preloaded in the document head. JavaScript is deferred and split by page — the contact page loads the Calendly widget JS; other pages don't touch it.</p>
        ${codeBlock('PHP', `<span class="code-comment">// Conditionally load Calendly only on contact page</span>
<span class="code-fn">add_action</span>( <span class="code-str">'wp_enqueue_scripts'</span>, <span class="code-kw">function</span>() {
    <span class="code-kw">if</span> ( <span class="code-fn">is_page</span>( <span class="code-str">'contact'</span> ) ) {
        <span class="code-fn">wp_enqueue_script</span>(
            <span class="code-str">'calendly-widget'</span>,
            <span class="code-str">'https://assets.calendly.com/assets/external/widget.js'</span>,
            [], <span class="code-kw">null</span>, <span class="code-kw">true</span>
        );
    }
} );`)}
        <h3>WPML Setup</h3>
        <p>WPML configured with language-specific subpages (<code>/en/</code>, <code>/fr/</code>, <code>/de/</code>). ACF fields are translatable through WPML's string translation module. <code>hreflang</code> tags auto-generated. Each language version has its own SEO metadata.</p>
      `),
      section(4, 'THE RESULTS', 'Measured impact at 90 days', `
        <div class="cs-results-grid">
          ${resultCard('97', 'Mobile PageSpeed', 'Up from 31. LCP dropped from 5.2s to 0.9s. Achieved purely through clean code — no CDN required.')}
          ${resultCard('+34%', 'Lead form submissions', 'Compared to the 90 days prior on the old site. Attributed to faster load and cleaner CTA layout.')}
          ${resultCard('3', 'Languages live', 'English, French, German. Organic traffic from .fr and .de TLDs appeared within 6 weeks of launch.')}
          ${resultCard('1.4s', 'Average load time', 'Measured on WebPageTest from London, Paris, and Frankfurt. Consistent across all three.')}
        </div>
        ${callout('success', '✅', '<strong>Client feedback:</strong> "Our French clients commented on the new site unprompted — they said it finally felt like they were talking to us directly. The booking widget has saved us at least an hour of email every week."')}
      `),
      section(5, 'TECH BREAKDOWN', 'Stack and decisions', `
        <div class="post-table-wrap"><table class="post-table">
          <thead><tr><th>Layer</th><th>Approach</th><th>Why</th></tr></thead>
          <tbody>
            ${tableRow('Theme', 'Custom PHP, zero page builder', 'Full control over output, no dead CSS')}
            ${tableRow('Content', 'ACF Flexible Content — 9 custom blocks', 'Client-editable without breaking layout')}
            ${tableRow('Multilingual', 'WPML + String Translation module', 'Proper <code>hreflang</code>, separate URLs per language')}
            ${tableRow('Booking', 'Calendly embed + GA4 event on <code>calendly.event_scheduled</code>', 'Tracks bookings as conversions in analytics')}
            ${tableRow('Forms', 'Gravity Forms → Zapier → CRM webhook', 'Conditional fields, file upload support')}
            ${tableRow('Performance', 'WP Rocket, ShortPixel WebP, preloaded LCP', '97 mobile PageSpeed without a CDN')}
          </tbody>
        </table></div>
      `)
    ], ['WordPress', 'PHP', 'ACF', 'WPML', 'Calendly', 'Gravity Forms'],
    'ecommerce-fashion-store', 'E-Commerce Fashion Store',
    'shopify-fashion-brand', 'Shopify Fashion Brand Storefront'); }
  },

  /* ── 4. SHOPIFY FASHION BRAND ────────────────────────── */
  'shopify-fashion-brand': {
    title: 'Shopify Fashion Brand Storefront',
    subtitle: 'Custom Liquid theme from a blank slate — mobile PageSpeed from 38 to 97, conversion rate up 28%, with metafield-driven editorial content.',
    description: 'Custom Shopify Liquid theme built from a blank slate. Mobile-first, sub-2s load time, upsell flows, and metafield-driven editorial content.',
    category: 'SHOPIFY', year: '2024', type: 'Shopify Development',
    heroImg: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1400&h=700&fit=crop',
    heroImgAlt: 'Shopify fashion brand storefront',
    metrics: [
      { val: '+28%', key: 'Conversion Rate' }, { val: '1.9s', key: 'Load Time' },
      { val: '97', key: 'Mobile Score' },       { val: '18', key: 'Custom Sections' },
    ],
    duration: '3 weeks', client: 'Premium Streetwear Brand', role: 'Sole Developer', stack: 'Shopify · Liquid · JavaScript · CSS · Metafields',
    get bodyHTML() { return buildBody([
      overviewBar(this.client, this.duration, this.role, this.stack),
      section(1, 'THE TASK', 'What the client needed', `
        <p class="cs-lead">A premium streetwear brand was growing fast but their Shopify store was letting them down. Built on a marketplace theme they had no control over, every Shopify update broke something. Mobile performance was 38/100. They needed a theme that was entirely their own.</p>
        <div class="cs-task-list">
          ${taskItem('<strong>Custom Liquid theme from scratch</strong> — no third-party theme dependency, no conflicting section code.')}
          ${taskItem('<strong>Mobile-first performance</strong> — target 90+ PageSpeed on mobile, sub-2s LCP.')}
          ${taskItem('<strong>Cart upsell drawer</strong> — cross-sell recommendations in the sliding cart, driven by product tags.')}
          ${taskItem('<strong>Metafield-driven editorial blocks</strong> — "campaign story" content manageable from Shopify admin without touching code.')}
          ${taskItem('<strong>18 configurable sections</strong> — all editable in the Shopify theme customiser, no developer needed for content updates.')}
        </div>`),
      section(2, 'THE PROBLEM', 'Why the existing theme was costing conversions', `
        <div class="cs-problem-grid">
          ${problemCard('📉', '38/100 Mobile Score', 'The marketplace theme loaded 340KB of unneeded CSS and 12 third-party scripts on every page. Mobile users were bouncing before the hero image finished loading.')}
          ${problemCard('🔒', 'Zero Customisation', 'The theme editor exposed 8 settings. Every design change required editing minified theme files — which broke on every theme update.')}
          ${problemCard('🛒', 'No Upsell Layer', 'Standard add-to-cart sent users directly to checkout with no opportunity to cross-sell. AOV was well below industry benchmarks for their price point.')}
          ${problemCard('📝', 'Editorial Content Hardcoded', 'Campaign story pages were static HTML files managed by a developer. New collection launches required a dev ticket every time.')}
        </div>
      `),
      section(3, 'THE SOLUTION', 'Custom Liquid theme from zero', `
        <p>Built a completely custom Liquid theme starting from Shopify's Dawn blank slate architecture. Every section is schema-defined with clean JSON settings — fully configurable in the theme customiser.</p>
        <h3>Performance Approach</h3>
        <p>CSS is split by section — each section stylesheet loads only when the section is present on the page. The LCP image (hero banner) uses Shopify's <code>image_tag</code> filter with <code>fetchpriority: 'high'</code> and <code>loading: 'eager'</code>. All non-critical JS is deferred via <code>defer</code> attribute or dynamic <code>import()</code>.</p>
        ${codeBlock('Liquid', `{%- comment -%} Hero image with LCP optimisation {%- endcomment -%}
{{ section.settings.hero_image | image_url: width: 1400
  | image_tag:
    loading: 'eager',
    fetchpriority: 'high',
    widths: '375, 750, 1100, 1400',
    sizes: '100vw',
    class: 'hero__img' }}`)}
        <h3>Cart Upsell Drawer</h3>
        <p>A slide-in cart drawer fetches cross-sell recommendations via the Shopify Ajax API, filtered by a custom <code>complementary</code> product tag set in the admin. No app required — pure Liquid + vanilla JS, zero additional Storefront API calls.</p>
        <h3>Metafield Editorial Blocks</h3>
        <p>Campaign story content (look-book images, editorial copy, video embeds) is stored in product and page metafields. A custom Liquid section reads these metafields and renders them — marketers can update campaign content from the Shopify admin without touching code.</p>
      `),
      section(4, 'THE RESULTS', 'Measured at 60 days post-launch', `
        <div class="cs-results-grid">
          ${resultCard('+28%', 'Conversion rate', 'From 1.8% to 2.3%. Attributed to faster load time and the upsell drawer increasing basket completion.')}
          ${resultCard('97', 'Mobile PageSpeed', 'Up from 38. LCP: 1.2s. CLS: 0.01. INP: < 100ms. Passed all Core Web Vitals on first test.')}
          ${resultCard('1.9s', 'LCP on mobile', 'Down from 5.8s. Achieved without a CDN — purely through asset optimisation and lazy loading strategy.')}
          ${resultCard('+18%', 'Average order value', 'Cart upsell drawer contributed to a measurable lift in AOV as customers added complementary items during checkout.')}
        </div>
        ${callout('success', '✅', '<strong>Client feedback:</strong> "For the first time we can launch a new collection without calling a developer. The campaign blocks are exactly what we needed — and the speed improvement was immediately visible in our ads dashboard."')}
      `),
      section(5, 'TECH BREAKDOWN', 'Stack and key decisions', `
        <div class="post-table-wrap"><table class="post-table">
          <thead><tr><th>Layer</th><th>Approach</th><th>Why</th></tr></thead>
          <tbody>
            ${tableRow('Theme base', 'Custom Liquid from Dawn blank slate', 'Full control, Shopify-native architecture')}
            ${tableRow('Performance', 'Section-scoped CSS, deferred JS, preloaded LCP', '97 mobile PageSpeed without CDN')}
            ${tableRow('Upsell', 'Cart drawer via Shopify Ajax Cart API', 'No app fee, zero latency, fully custom UX')}
            ${tableRow('Editorial', 'Product/page metafields via Shopify admin', 'Non-technical team can manage campaign content')}
            ${tableRow('Sections', '18 schema-defined theme customiser sections', 'Full layout flexibility without code')}
            ${tableRow('Images', '<code>image_url</code> filter with responsive widths', 'Shopify CDN handles format negotiation (WebP/AVIF)')}
          </tbody>
        </table></div>
      `)
    ], ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Metafields', 'Ajax Cart API'],
    'business-consulting-website', 'Business Consulting Website',
    'rest-api-sync-plugin', 'CRM ↔ WordPress REST API Sync Plugin'); }
  },

  /* ── 5. REAL ESTATE WEBSITE ─────────────────────────── */
  'real-estate-website': {
    title: 'Real Estate Agency Website',
    subtitle: 'Property-listing platform with IDX feed integration, custom CPT-based listings, advanced AJAX search, and automated lead capture — 3× more enquiries in 90 days.',
    description: 'WordPress property platform with IDX feed integration, custom post types for listings, AJAX search, and automated lead-capture forms for a UK estate agency.',
    category: 'WORDPRESS', year: '2023', type: 'WordPress Custom Development',
    heroImg: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&h=700&fit=crop',
    heroImgAlt: 'Real estate agency website',
    metrics: [
      { val: '500+', key: 'Listings' }, { val: '3×', key: 'More Leads' },
      { val: '95', key: 'PageSpeed' },  { val: '2wk', key: 'Delivery' },
    ],
    duration: '2 weeks', client: 'UK Estate Agency', role: 'Sole Developer', stack: 'WordPress · PHP · ACF · WP REST API · AJAX',
    get bodyHTML() { return buildBody([
      overviewBar(this.client, this.duration, this.role, this.stack),
      section(1, 'THE TASK', 'What the agency needed', `
        <p class="cs-lead">A UK estate agency with 500+ active property listings was using a generic WordPress theme with no property-specific functionality. Listings were managed in a spreadsheet and manually copy-pasted into posts. Enquiries came by phone only — no online lead capture.</p>
        <div class="cs-task-list">
          ${taskItem('<strong>Custom post type for properties</strong> — structured fields for bedrooms, bathrooms, price, status, postcode, EPC rating, and photos.')}
          ${taskItem('<strong>AJAX property search</strong> — filter by type, price range, bedrooms, and location without page reload.')}
          ${taskItem('<strong>IDX feed import</strong> — automated nightly import of new listings from the agency\'s property management software via their REST API.')}
          ${taskItem('<strong>Enquiry forms per listing</strong> — each property page has a contact form that fires to the negotiator responsible for that listing.')}
        </div>`),
      section(2, 'THE PROBLEM', 'The old approach was unworkable at scale', `
        <div class="cs-problem-grid">
          ${problemCard('📋', 'Manual Listings', 'Every new property required copying data from a spreadsheet into WordPress. 500+ listings = hundreds of hours of admin work per year.')}
          ${problemCard('🔍', 'No Search Filters', 'The old site had a single search box. Visitors searching for "3 bed under £400k in Guildford" had no way to filter — they left immediately.')}
          ${problemCard('📞', 'Phone Enquiries Only', 'No online contact form meant all enquiries required a phone call. Out-of-hours leads were lost entirely. The agency estimated 40% of potential enquiries never contacted them.')}
          ${problemCard('📸', 'Poor Photo Galleries', 'Property photos were uploaded as individual posts. No gallery, no lightbox, no photo ordering — just a list of attached images in random order.')}
        </div>
      `),
      section(3, 'THE SOLUTION', 'A purpose-built property platform', `
        <p>Built a custom WordPress theme with a <code>property</code> custom post type and 28 ACF fields covering every property attribute the agency tracks. A nightly WP-Cron job fetches new and updated listings from the property management API and creates/updates WordPress posts automatically.</p>
        <h3>AJAX Search</h3>
        <p>A custom WP REST API endpoint accepts search parameters and returns filtered property IDs. The frontend hits this endpoint on filter change, then renders result cards without a full page reload — fast enough that no loading state is needed.</p>
        ${codeBlock('PHP', `<span class="code-comment">// Custom REST endpoint for property search</span>
<span class="code-fn">register_rest_route</span>( <span class="code-str">'neo/v1'</span>, <span class="code-str">'/properties'</span>, [
    <span class="code-str">'methods'</span>  => <span class="code-str">'GET'</span>,
    <span class="code-str">'callback'</span> => <span class="code-str">'neo_property_search'</span>,
    <span class="code-str">'args'</span>     => [
        <span class="code-str">'min_price'</span>  => [ <span class="code-str">'type'</span> => <span class="code-str">'integer'</span> ],
        <span class="code-str">'max_price'</span>  => [ <span class="code-str">'type'</span> => <span class="code-str">'integer'</span> ],
        <span class="code-str">'bedrooms'</span>   => [ <span class="code-str">'type'</span> => <span class="code-str">'integer'</span> ],
        <span class="code-str">'property_type'</span> => [ <span class="code-str">'type'</span> => <span class="code-str">'string'</span> ],
        <span class="code-str">'location'</span>   => [ <span class="code-str">'type'</span> => <span class="code-str">'string'</span> ],
    ],
] );`)}
        <h3>Enquiry Routing</h3>
        <p>Each property is assigned a responsible negotiator (ACF user relationship field). On form submission, the plugin resolves the negotiator's email address from that field and sends the enquiry directly to them — no manual forwarding required.</p>
      `),
      section(4, 'THE RESULTS', 'Three months after launch', `
        <div class="cs-results-grid">
          ${resultCard('3×', 'More online enquiries', 'Compared to the 90-day period before launch. Online forms replaced phone as the primary contact method for new enquiries within 6 weeks.')}
          ${resultCard('500+', 'Listings auto-imported', 'The nightly IDX import ran without failure for 90 days. Zero manual data entry by agency staff after go-live.')}
          ${resultCard('95', 'PageSpeed score', 'Custom theme with no bloat, WebP images, and aggressive lazy loading. The image gallery uses intersection observer for progressive loading.')}
          ${resultCard('2wk', 'Delivery timeline', 'Full build from kickoff to live including content migration of 500 existing listings from the old WordPress install.')}
        </div>
        ${callout('success', '✅', '<strong>Client feedback:</strong> "We used to lose enquiries every evening and weekend. Now we wake up to form submissions with full property details already attached. The automated import alone saved my office manager two hours every morning."')}
      `),
      section(5, 'TECH BREAKDOWN', 'Stack decisions', `
        <div class="post-table-wrap"><table class="post-table">
          <thead><tr><th>Layer</th><th>Approach</th><th>Why</th></tr></thead>
          <tbody>
            ${tableRow('Listings', 'Custom CPT <code>property</code> + 28 ACF fields', 'Structured data, queryable via WP_Query + meta_query')}
            ${tableRow('IDX import', 'WP-Cron nightly job → REST API fetch → <code>wp_insert_post()</code>', 'Zero manual work, handles creates and updates')}
            ${tableRow('Search', 'Custom WP REST endpoint + vanilla JS frontend', 'No plugin dependency, fast, cacheable')}
            ${tableRow('Enquiry routing', 'ACF user field → <code>wp_mail()</code> to negotiator', 'Direct delivery, no CRM required')}
            ${tableRow('Gallery', 'ACF Repeater + Intersection Observer lazy load', 'Photo ordering, lazy loading without a plugin')}
            ${tableRow('Maps', 'Google Maps Embed API per listing', 'Postcode geocoded at import time, no client-side API key')}
          </tbody>
        </table></div>
      `)
    ], ['WordPress', 'PHP', 'ACF', 'Custom CPT', 'WP REST API', 'AJAX', 'IDX Integration'],
    'shopify-fashion-brand', 'Shopify Fashion Brand Storefront',
    'high-converting-landing-page', 'High-Converting Ad Landing Page'); }
  },

  /* ── 6. HIGH-CONVERTING LANDING PAGE ────────────────── */
  'high-converting-landing-page': {
    title: 'High-Converting Ad Landing Page',
    subtitle: 'Google Ads landing page with 4.7% conversion rate, 0.9s LCP, and A/B test infrastructure — built in Webflow with GTM and GA4 event tracking.',
    description: 'CRO-focused landing page built for a Google Ads campaign — fast load, single CTA focus, A/B test-ready layout, and full analytics instrumentation.',
    category: 'LANDING PAGE', year: '2023', type: 'CRO / Web Development',
    heroImg: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=700&fit=crop',
    heroImgAlt: 'High-converting ad landing page',
    metrics: [
      { val: '4.7%', key: 'CVR' },       { val: '–38%', key: 'Bounce Rate' },
      { val: '0.9s', key: 'LCP' },        { val: '£12', key: 'Cost Per Lead' },
    ],
    duration: '1 week', client: 'B2B SaaS Company', role: 'Developer + CRO Consultant', stack: 'Webflow · GTM · GA4 · Custom JS · Hotjar',
    get bodyHTML() { return buildBody([
      overviewBar(this.client, this.duration, this.role, this.stack),
      section(1, 'THE TASK', 'What the client needed', `
        <p class="cs-lead">A B2B SaaS company was running Google Ads campaigns sending traffic to their homepage. Click-through rates were healthy but conversion rates were terrible — 0.9%. They needed a dedicated landing page built specifically around the ad message, with one CTA and zero distractions.</p>
        <div class="cs-task-list">
          ${taskItem('<strong>Single-focus landing page</strong> — no navigation, no footer links, one action: book a demo.')}
          ${taskItem('<strong>Message match</strong> — headline and copy aligned to the specific ad group keywords to reduce cognitive mismatch.')}
          ${taskItem('<strong>Full analytics instrumentation</strong> — GA4 events on scroll depth, video play, CTA clicks, and form submission for conversion tracking.')}
          ${taskItem('<strong>A/B test ready</strong> — two layout variants (hero-first vs. social proof-first) with GTM-based variant assignment.')}
          ${taskItem('<strong>Sub-1s LCP</strong> — fast enough that ad Quality Score benefits from the page experience signal.')}
        </div>`),
      section(2, 'THE PROBLEM', 'Why the homepage was killing their ROAS', `
        <div class="cs-problem-grid">
          ${problemCard('🎯', 'Message Mismatch', 'The ads promised "Cut your onboarding time in half." The homepage talked about 14 different features. Visitors landed and immediately lost the thread.')}
          ${problemCard('🔗', 'Navigation Leakage', 'Homepage navigation had 12 links. Paid traffic was clicking away to the blog, pricing page, and careers — anywhere but the CTA.')}
          ${problemCard('📊', 'No Conversion Tracking', 'GA4 was installed but no events were configured. The client had no idea which ad groups were actually converting — they were optimising blind.')}
          ${problemCard('⏱️', '2.8s LCP', 'The homepage loaded a full-screen video hero on mobile. Google\'s Quality Score factored in page experience — they were paying a premium CPM for a slow page.')}
        </div>
        ${callout('warn', '⚠️', 'At £0.80 CPC with a 0.9% conversion rate and £120 average deal value, the campaign was running at a <strong>£88.89 cost per acquisition</strong> — well above the target of £25.')}
      `),
      section(3, 'THE SOLUTION', 'A purpose-built, instrumented landing page', `
        <p>Built the page in Webflow for rapid iteration and client self-management, with all tracking and A/B logic handled in GTM to keep the Webflow publish cycle clean.</p>
        <h3>Page Architecture</h3>
        <p>Single scroll — no navigation, no links off the page. Structure: pain-point headline → 3 key benefits → social proof (logos + quote) → demo booking form. Every section earns its place by moving the visitor toward the CTA.</p>
        <h3>GA4 Instrumentation</h3>
        <p>GTM triggers on: 25/50/75/100% scroll depth, video play/complete, CTA button clicks, form start, and form submission. All events fire to GA4 with the ad group as a custom dimension — so the client can see conversion rates per keyword group, not just per campaign.</p>
        ${codeBlock('JavaScript', `<span class="code-comment">// GTM custom event — fires on Calendly booking confirmed</span>
window.addEventListener(<span class="code-str">'message'</span>, <span class="code-kw">function</span>(e) {
  <span class="code-kw">if</span> (e.data.event === <span class="code-str">'calendly.event_scheduled'</span>) {
    window.dataLayer.push({
      event: <span class="code-str">'generate_lead'</span>,
      lead_source: <span class="code-str">'google_ads_landing'</span>,
      ad_group: <span class="code-kw">new</span> URLSearchParams(location.search).get(<span class="code-str">'adgroup'</span>)
    });
  }
});`)}
        <h3>A/B Testing</h3>
        <p>GTM assigns 50% of visitors to variant B (social proof section moved above the fold, benefit icons replaced with customer photo). Assignment is cookie-persisted, consistent across sessions. GA4 custom dimension tracks which variant each conversion came from.</p>
      `),
      section(4, 'THE RESULTS', 'First 30 days of the new page', `
        <div class="cs-results-grid">
          ${resultCard('4.7%', 'Conversion rate', 'Up from 0.9%. Same ad spend, same keywords — 5.2× more bookings. Variant B (social proof first) won A/B test with 94% statistical confidence.')}
          ${resultCard('£12', 'Cost per lead', 'Down from £88.89. The campaign went from loss-making to their best-performing acquisition channel.')}
          ${resultCard('0.9s', 'LCP on mobile', 'Static hero image with WebP + preload. Google Quality Score improved from 4/10 to 8/10, reducing CPC by ~18%.')}
          ${resultCard('–38%', 'Bounce rate', 'Removing navigation and matching the ad message kept visitors engaged. Average time on page increased from 18s to 2m 14s.')}
        </div>
        ${callout('success', '✅', '<strong>Client feedback:</strong> "We\'d been running these ads for six months and never broke 1% conversion. Within two weeks of the new page going live we hit 5%. The tracking setup alone was worth the project cost — we finally know which keywords are actually making us money."')}
      `),
      section(5, 'TECH BREAKDOWN', 'Tools and rationale', `
        <div class="post-table-wrap"><table class="post-table">
          <thead><tr><th>Layer</th><th>Approach</th><th>Why</th></tr></thead>
          <tbody>
            ${tableRow('Build', 'Webflow (no-code/low-code)', 'Client can edit copy and images without dev; fast to iterate on layout during A/B test')}
            ${tableRow('Analytics', 'GA4 + GTM', 'Event-level conversion data, ad group attribution via URL parameters')}
            ${tableRow('A/B testing', 'GTM variant assignment + cookie persistence', 'No third-party testing tool cost; sufficient for this traffic volume')}
            ${tableRow('Heatmaps', 'Hotjar session recordings + click maps', 'Validated which sections visitors engaged with before making changes')}
            ${tableRow('Booking', 'Calendly embed + GTM calendly.event_scheduled listener', 'Conversion fires on confirmed booking, not just form submit')}
            ${tableRow('Performance', 'WebP hero + preload link in Webflow head', '0.9s LCP, improved Ad Quality Score by 4 points')}
          </tbody>
        </table></div>
      `)
    ], ['Webflow', 'GTM', 'GA4', 'CRO', 'A/B Testing', 'Hotjar', 'Calendly'],
    'real-estate-website', 'Real Estate Agency Website',
    'payment-gateway-plugin', 'Custom WooCommerce Payment Gateway'); }
  },

  /* ── 7. PAYMENT GATEWAY PLUGIN ──────────────────────── */
  'payment-gateway-plugin': {
    title: 'Custom WooCommerce Payment Gateway',
    subtitle: 'First-class native WooCommerce checkout integration for a regional payment provider — server-side tokenisation, webhook-driven order status, full refund support.',
    description: 'Custom WooCommerce payment gateway plugin integrating a regional payment provider — webhook handling, refunds, server-side tokenisation, and full WC admin integration.',
    category: 'PLUGIN DEV', year: '2023', type: 'WooCommerce Plugin',
    heroImg: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=700&fit=crop',
    heroImgAlt: 'Payment gateway integration',
    metrics: [
      { val: '0', key: 'Payment Failures' }, { val: '<2min', key: 'Refund Time' },
      { val: '100%', key: 'Uptime' },         { val: '6mo', key: 'In Production' },
    ],
    duration: '2 weeks', client: 'Regional E-Commerce Store (MENA)', role: 'Sole Developer', stack: 'PHP · WooCommerce · REST API · HMAC · Webhooks',
    get bodyHTML() { return buildBody([
      overviewBar(this.client, this.duration, this.role, this.stack),
      section(1, 'THE TASK', 'What the client needed', `
        <p class="cs-lead">A WooCommerce store in the MENA region needed to accept payments through a local payment provider that had no official WooCommerce plugin. Their workaround — a payment link that sent customers off-site with no return path — was costing them abandoned carts on every order.</p>
        <div class="cs-task-list">
          ${taskItem('<strong>Native WC checkout integration</strong> — payment form inline on checkout, no redirect, no off-site flow.')}
          ${taskItem('<strong>Server-side tokenisation</strong> — card data never touches the merchant server; handled by the payment provider\'s JS SDK and server-to-server API.')}
          ${taskItem('<strong>Webhook-driven order status</strong> — order statuses update automatically when the payment provider sends payment, failure, and chargeback events.')}
          ${taskItem('<strong>Refunds from WC admin</strong> — the standard WooCommerce refund button must trigger an actual refund at the payment provider, not just a status change.')}
        </div>`),
      section(2, 'THE PROBLEM', 'The payment link workaround was losing sales', `
        <div class="cs-problem-grid">
          ${problemCard('🔗', 'Off-Site Redirect', 'The payment link sent customers to the provider\'s hosted page with no branding. Cart abandonment at this step was 43% — far above the 18% industry average for in-checkout payment.')}
          ${problemCard('🔙', 'No Return Path', 'After payment, customers landed on the provider\'s generic success page with no link back to the store. No order confirmation email triggered, no WooCommerce order created.')}
          ${problemCard('💰', 'Manual Refunds', 'Every refund required the store owner to log into the payment provider\'s portal, find the transaction, and process the refund there. No record in WooCommerce.')}
          ${problemCard('📋', 'No Order Data', 'Without a native integration, order data in WooCommerce was incomplete — payment method, transaction ID, and payment status were all missing from order records.')}
        </div>
      `),
      section(3, 'THE SOLUTION', 'Extending WC_Payment_Gateway', `
        <p>Built a proper WooCommerce gateway plugin by extending the <code>WC_Payment_Gateway</code> class. This makes the integration first-class — it appears in WooCommerce payment settings, respects WC order lifecycle hooks, and works with WooCommerce Subscriptions if needed.</p>
        <h3>Tokenisation Flow</h3>
        <p>The payment provider's JS SDK runs in the checkout page and handles card collection, returning a one-time token. That token is submitted with the order form. The PHP gateway class exchanges the token for a charge via a server-to-server API call — card data never enters the WordPress environment.</p>
        ${codeBlock('PHP', `<span class="code-comment">// Server-side charge via token</span>
<span class="code-kw">public function</span> <span class="code-fn">process_payment</span>( <span class="code-var">$order_id</span> ) {
    <span class="code-var">$order</span>  = wc_get_order( <span class="code-var">$order_id</span> );
    <span class="code-var">$token</span>  = sanitize_text_field( <span class="code-var">$_POST</span>[<span class="code-str">'neo_pay_token'</span>] );
    <span class="code-var">$result</span> = <span class="code-var">$this</span>->api->charge([
        <span class="code-str">'token'</span>    => <span class="code-var">$token</span>,
        <span class="code-str">'amount'</span>   => <span class="code-var">$order</span>->get_total() * <span class="code-num">100</span>, <span class="code-comment">// pence</span>
        <span class="code-str">'currency'</span> => get_woocommerce_currency(),
        <span class="code-str">'reference'</span>=> <span class="code-str">'ORDER-'</span> . <span class="code-var">$order_id</span>,
    ]);
    <span class="code-kw">if</span> ( <span class="code-var">$result</span>->success ) {
        <span class="code-var">$order</span>->payment_complete( <span class="code-var">$result</span>->transaction_id );
        <span class="code-kw">return</span> [ <span class="code-str">'result'</span> => <span class="code-str">'success'</span>, <span class="code-str">'redirect'</span> => <span class="code-var">$this</span>->get_return_url( <span class="code-var">$order</span> ) ];
    }
    wc_add_notice( <span class="code-var">$result</span>->error_message, <span class="code-str">'error'</span> );
    <span class="code-kw">return</span> [ <span class="code-str">'result'</span> => <span class="code-str">'fail'</span> ];
}`)}
        <h3>Webhook Handling</h3>
        <p>A custom REST endpoint at <code>/wp-json/neo-pay/v1/webhook</code> receives signed webhook events from the payment provider. HMAC-SHA256 signature verified on every request before processing. Handles: <code>payment.success</code>, <code>payment.failed</code>, <code>payment.refunded</code>, and <code>chargeback.created</code>.</p>
        <h3>WC Refund Integration</h3>
        <p>Hooked into <code>woocommerce_create_refund</code> to intercept the refund action and call the payment provider API before allowing the WC refund to complete. If the API call fails, the WC refund is blocked and an admin notice is shown.</p>
      `),
      section(4, 'THE RESULTS', 'At 6 months in production', `
        <div class="cs-results-grid">
          ${resultCard('0', 'Payment failures', 'Zero failed charges due to plugin errors in 6 months of production across 800+ transactions.')}
          ${resultCard('–43%', 'Cart abandonment', 'Removing the off-site redirect brought checkout abandonment from 43% down to industry-standard levels.')}
          ${resultCard('<2min', 'Refund time', 'Store owner processes refunds from WC admin like any other order — one click, done. Previously 8–10 minutes of manual portal navigation.')}
          ${resultCard('100%', 'Webhook delivery', 'Every payment event received and processed correctly. WC order statuses always match the payment provider\'s actual state.')}
        </div>
        ${callout('success', '✅', '<strong>Client feedback:</strong> "Before this, we were losing nearly half our customers at the payment step. Now checkout feels like any other WooCommerce store. The refund handling alone saved us hours every month — we didn\'t realise how much time we were wasting."')}
      `),
      section(5, 'TECH BREAKDOWN', 'Implementation details', `
        <div class="post-table-wrap"><table class="post-table">
          <thead><tr><th>Layer</th><th>Approach</th><th>Why</th></tr></thead>
          <tbody>
            ${tableRow('Gateway class', 'Extends <code>WC_Payment_Gateway</code>', 'Native WC integration — settings, refunds, and subscriptions all work automatically')}
            ${tableRow('Card handling', 'Provider JS SDK → one-time token → server-side charge', 'PCI DSS compliance — card data never on our server')}
            ${tableRow('Webhooks', 'Custom WP REST route + HMAC-SHA256 verification', 'Secure event processing, idempotent (safe to retry)')}
            ${tableRow('Refunds', '<code>woocommerce_create_refund</code> hook', 'Blocks WC refund if API refund fails — prevents desync')}
            ${tableRow('Logging', '<code>WC_Logger</code> — all API requests and responses logged', 'Auditable transaction history, easy debugging')}
            ${tableRow('Settings', 'WC payment settings fields (API key, webhook secret, test mode)', 'Standard WC UI — no custom admin page needed')}
          </tbody>
        </table></div>
      `)
    ], ['PHP', 'WooCommerce', 'REST API', 'Webhooks', 'HMAC', 'WC_Payment_Gateway'],
    'high-converting-landing-page', 'High-Converting Ad Landing Page',
    'jewelry-shopify-store', 'Luxury Jewelry Shopify Store'); }
  },

  /* ── 8. JEWELRY SHOPIFY STORE ───────────────────────── */
  'jewelry-shopify-store': {
    title: 'Luxury Jewelry Shopify Store',
    subtitle: 'Elegant Shopify store for a luxury jewelry brand — advanced multi-attribute filtering, localStorage wishlist, high-quality image galleries, 98 PageSpeed on mobile.',
    description: 'Custom Shopify theme for a luxury jewelry brand with advanced product filtering by metal, stone, and price — plus a wishlist saved to localStorage.',
    category: 'SHOPIFY', year: '2022', type: 'Shopify Development',
    heroImg: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1400&h=700&fit=crop',
    heroImgAlt: 'Luxury jewelry Shopify store',
    metrics: [
      { val: '+22%', key: 'AOV' },     { val: '98', key: 'PageSpeed' },
      { val: '2.1s', key: 'Load Time' }, { val: '3.2%', key: 'CVR' },
    ],
    duration: '2 weeks', client: 'Luxury Jewelry Brand (UK)', role: 'Sole Developer', stack: 'Shopify · Liquid · JavaScript · Metafields · CSS',
    get bodyHTML() { return buildBody([
      overviewBar(this.client, this.duration, this.role, this.stack),
      section(1, 'THE TASK', 'What the brand needed', `
        <p class="cs-lead">A UK-based luxury jewelry brand was selling on a generic Shopify theme that looked nothing like their brand positioning. Products ranged from £200 to £8,000 — but the store felt like a budget marketplace. They needed a custom theme that matched the premium feel of their products and made browsing a large catalog simple.</p>
        <div class="cs-task-list">
          ${taskItem('<strong>Premium custom theme</strong> — full-screen imagery, editorial feel, typography-led design matching the brand guide.')}
          ${taskItem('<strong>Multi-attribute product filtering</strong> — filter simultaneously by metal type (gold/silver/platinum), stone, price range, and collection.')}
          ${taskItem('<strong>Wishlist with localStorage persistence</strong> — customers save favourites, wishlist persists across sessions without requiring an account.')}
          ${taskItem('<strong>Zoom and gallery on product pages</strong> — high-resolution image zoom, video support, and ordered photo carousel driven by Shopify metafields.')}
          ${taskItem('<strong>98 PageSpeed on mobile</strong> — luxury positioning means large images, but performance cannot be sacrificed.')}
        </div>`),
      section(2, 'THE PROBLEM', 'The old theme undermined the brand', `
        <div class="cs-problem-grid">
          ${problemCard('💎', 'Brand Mismatch', 'An £8,000 necklace was displayed on the same template as a £15 product from a standard Shopify theme. Customers consistently mentioned the site "didn\'t feel premium" in post-purchase surveys.')}
          ${problemCard('🔍', 'No Filtering', 'With 200+ products, the only way to browse was scroll or search. Customers looking for "yellow gold under £500 with sapphire" had no way to narrow down — they left.')}
          ${problemCard('❤️', 'No Wishlist', 'Jewelry buying often involves a consideration period. Customers who wanted to "save for later" bookmarked product URLs manually. No way for the brand to follow up on saved items.')}
          ${problemCard('📸', 'Poor Image Quality', 'The old theme capped product images at 800px width. On retina displays, product photos looked soft — a significant credibility problem for a luxury brand.')}
        </div>
      `),
      section(3, 'THE SOLUTION', 'A purpose-built luxury storefront', `
        <p>Built a custom Liquid theme with an editorial, fashion-magazine aesthetic. Full-bleed photography, generous white space, and a muted serif/sans-serif typographic system designed specifically for the brand.</p>
        <h3>Multi-Attribute Filtering</h3>
        <p>Shopify's native search and filter system (powered by metafields defined in the Shopify admin) handles the filter logic server-side. The custom filter UI is built in Liquid and uses Shopify's URL-based filter parameters — fully SEO-friendly, no AJAX required, works without JavaScript enabled.</p>
        ${codeBlock('Liquid', `{%- comment -%} Render active filter pills {%- endcomment -%}
{%- for filter in collection.filters -%}
  {%- for value in filter.active_values -%}
    <a class="filter-pill" href="{{ value.url_to_remove }}">
      {{ filter.label }}: {{ value.label }}
      <span aria-hidden="true">×</span>
    </a>
  {%- endfor -%}
{%- endfor -%}`)}
        <h3>localStorage Wishlist</h3>
        <p>A vanilla JS wishlist module stores product IDs in <code>localStorage</code>. A dedicated wishlist page reads the stored IDs and fetches product data from the Shopify Ajax API to render the saved items. No app, no account required, persists indefinitely.</p>
        <h3>High-Resolution Gallery</h3>
        <p>Product images served through Shopify's CDN at up to 2000px, with responsive <code>srcset</code>. A custom image zoom built with CSS <code>transform: scale()</code> and pointer events — no library, adds 0KB. Product videos embed from a metafield (YouTube or Vimeo URL) as a gallery slide.</p>
      `),
      section(4, 'THE RESULTS', 'Measured over 90 days', `
        <div class="cs-results-grid">
          ${resultCard('+22%', 'Average order value', 'Customers browsed more product categories using filters. More cross-collection discovery led to higher basket values.')}
          ${resultCard('3.2%', 'Conversion rate', 'Up from 1.1%. Attributed to improved product presentation, faster load time, and reduced friction in finding relevant products.')}
          ${resultCard('98', 'Mobile PageSpeed', 'Despite large hero images. Achieved using Shopify CDN\'s AVIF/WebP negotiation, aggressive lazy loading, and deferred non-critical JS.')}
          ${resultCard('+340%', 'Wishlist saves per session', 'New feature — 34% of sessions on the new site included a wishlist interaction. The brand now runs "saved wishlist" email follow-up campaigns.')}
        </div>
        ${callout('success', '✅', '<strong>Client feedback:</strong> "The store finally looks like the brand we\'ve spent years building. Customers are spending more time browsing, adding to wishlists, and coming back. The filtering is something customers comment on in our post-purchase emails."')}
      `),
      section(5, 'TECH BREAKDOWN', 'Key implementation decisions', `
        <div class="post-table-wrap"><table class="post-table">
          <thead><tr><th>Layer</th><th>Approach</th><th>Why</th></tr></thead>
          <tbody>
            ${tableRow('Theme', 'Custom Liquid — built on Dawn blank slate', 'Full design control, Shopify-native architecture')}
            ${tableRow('Filtering', 'Shopify native filter + metafields — URL-based', 'SEO-friendly, works without JS, no app required')}
            ${tableRow('Wishlist', 'Vanilla JS + <code>localStorage</code> + Ajax API', 'No account needed, no app fee, offline-capable')}
            ${tableRow('Gallery zoom', 'CSS transform scale + pointer events', '0KB overhead, smooth 60fps on mobile')}
            ${tableRow('Images', 'Shopify CDN with <code>srcset</code> up to 2000px', 'AVIF/WebP negotiation automatic, retina-ready')}
            ${tableRow('Video', 'YouTube/Vimeo embed via product metafield', 'Editors add video per product via admin — no code')}
          </tbody>
        </table></div>
      `)
    ], ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Metafields', 'localStorage', 'Shopify Filters'],
    'payment-gateway-plugin', 'Custom WooCommerce Payment Gateway',
    'rest-api-sync-plugin', 'CRM ↔ WordPress REST API Sync Plugin'); }
  },
};

/* ── MAIN LOADER ─────────────────────────────────────────── */
(function loadProject() {
  const slug = new URLSearchParams(window.location.search).get('slug') || 'rest-api-sync-plugin';
  const project = PROJECTS[slug];

  if (!project) {
    document.title = 'Project Not Found — Code Neo';
    const article = document.querySelector('.cs-article');
    if (article) article.innerHTML = `
      <p class="cs-lead">This case study doesn't exist or may have moved.</p>
      <div style="text-align:center;padding:3rem 0;">
        <a href="portfolio.html" class="btn btn-primary">Browse All Projects →</a>
      </div>`;
    const hero = document.querySelector('.cs-hero-title');
    if (hero) hero.textContent = 'Project Not Found';
    return;
  }

  // ── Page meta ─────────────────────────────────────────
  document.title = `${project.title} — Case Study — Code Neo`;
  setMeta('description', project.description);
  setOGMeta('og:title', `${project.title} — Case Study — Code Neo`);
  setOGMeta('og:description', project.description);
  setOGMeta('og:url', `https://codeneo.dev/portfolio-detail.html?slug=${slug}`);
  if (project.heroImg) {
    setOGMeta('og:image', project.heroImg);
    setOGMeta('twitter:image', project.heroImg);
  }
  setOGMeta('twitter:title', `${project.title} — Case Study — Code Neo`);
  setOGMeta('twitter:description', project.description);

  // ── Hero patches ──────────────────────────────────────
  const heroImg = document.querySelector('.cs-hero-img');
  if (heroImg && project.heroImg) { heroImg.src = project.heroImg; heroImg.alt = project.heroImgAlt || project.title; }

  const heroTitle = document.querySelector('.cs-hero-title');
  if (heroTitle) heroTitle.innerHTML = project.title;

  const heroSubtitle = document.querySelector('.cs-hero-subtitle');
  if (heroSubtitle && project.subtitle) heroSubtitle.textContent = project.subtitle;

  const catBadge = document.querySelector('.cs-hero-meta .project-cat-badge');
  if (catBadge && project.category) catBadge.textContent = project.category;

  const yearEl = document.querySelector('.cs-hero-meta .post-meta-item');
  if (yearEl && project.year) yearEl.textContent = project.year;

  const typeEl = document.querySelectorAll('.cs-hero-meta .post-meta-item')[1];
  if (typeEl && project.type) typeEl.textContent = project.type;

  if (project.metrics) {
    const metricVals = document.querySelectorAll('.cs-metric-val');
    const metricKeys = document.querySelectorAll('.cs-metric-key');
    project.metrics.forEach((m, i) => {
      if (metricVals[i]) metricVals[i].textContent = m.val;
      if (metricKeys[i]) metricKeys[i].textContent = m.key;
    });
  }

  // ── Sidebar patches ──────────────────────────────────
  const metaRows = document.querySelectorAll('.cs-meta-row .cs-meta-val');
  if (metaRows[0] && project.type)     metaRows[0].textContent = project.type;
  if (metaRows[1] && project.year)     metaRows[1].textContent = project.year;
  if (metaRows[2] && project.duration) metaRows[2].textContent = project.duration;

  if (project.metrics) {
    const sideVals = document.querySelectorAll('.cs-sidebar-metric-val');
    const sideKeys = document.querySelectorAll('.cs-sidebar-metric-key');
    project.metrics.forEach((m, i) => {
      if (sideVals[i]) sideVals[i].textContent = m.val;
      if (sideKeys[i]) sideKeys[i].textContent = m.key;
    });
  }

  // ── Body HTML ─────────────────────────────────────────
  if (project.bodyHTML) {
    const article = document.querySelector('.cs-article');
    if (article) article.innerHTML = project.bodyHTML;
    // Re-wire code copy buttons after DOM swap
    wireCodeCopy();
    // Re-init reveal animations
    document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));
  }

  // ── Canonical ─────────────────────────────────────────
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
  canonical.href = `https://codeneo.dev/portfolio-detail.html?slug=${slug}`;
})();

/* ── CODE COPY BUTTONS ───────────────────────────────────── */
function wireCodeCopy() {
  document.querySelectorAll('.post-code-copy').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.closest('.post-code-block')?.querySelector('pre code');
      if (!code) return;
      navigator.clipboard.writeText(code.innerText || '').then(() => {
        btn.textContent = 'Copied!';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      });
    });
  });
}
wireCodeCopy();

/* ── REVEAL OBSERVER (for dynamically injected .reveal els) ─ */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.06, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.cs-article .reveal').forEach(el => revealObs.observe(el));

/* ── HELPERS ─────────────────────────────────────────────── */
function setMeta(name, content) {
  const el = document.querySelector(`meta[name="${name}"]`);
  if (el) el.setAttribute('content', content);
}
function setOGMeta(property, content) {
  const el = document.querySelector(`meta[property="${property}"]`);
  if (el) el.setAttribute('content', content);
}
