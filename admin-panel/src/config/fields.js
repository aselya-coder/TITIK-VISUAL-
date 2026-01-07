export const fieldsConfig = {
    global: [
      {
        section: "Top Bar & Navigation",
        fields: [
          { label: "Topbar Phone", path: "topbar_phone" },
          { label: "Topbar Email", path: "topbar_email" },
          { label: "Menu Home", path: "nav_home" },
          { label: "Menu About", path: "nav_about" },
          { label: "Menu Services", path: "nav_services" },
          { label: "Menu Portfolio", path: "nav_portfolio" },
          { label: "Menu Careers", path: "nav_careers" },
          { label: "Menu Contact", path: "nav_contact" },
        ]
      },
      {
        section: "Social Media",
        fields: [
          { label: "Facebook Link", path: "social_facebook_href" },
          { label: "Instagram Link", path: "social_instagram_href" },
        ]
      },
      {
        section: "Partners",
        fields: [
          { label: "Partner 1 Name", path: "partners.items.0.name" },
          { label: "Partner 1 Logo", path: "partners.items.0.logo" },
          { label: "Partner 1 Link", path: "partners.items.0.href" },
          { label: "Partner 2 Name", path: "partners.items.1.name" },
          { label: "Partner 2 Logo", path: "partners.items.1.logo" },
          { label: "Partner 2 Link", path: "partners.items.1.href" },
          { label: "Partner 3 Name", path: "partners.items.2.name" },
          { label: "Partner 3 Logo", path: "partners.items.2.logo" },
          { label: "Partner 3 Link", path: "partners.items.2.href" },
        ]
      }
    ],
    beranda: [
      {
        section: "Hero Section",
        fields: [
          { label: "Badge Text", path: "hero_badge_text" },
          { label: "Badge Icon", path: "hero_badge_icon" },
          { label: "Title Line 1", path: "hero_title_line1" },
          { label: "Title Line 2", path: "hero_title_line2" },
          { label: "Lead Prefix", path: "hero_lead_prefix" },
          { label: "Lead Highlight", path: "hero_lead_highlight" },
          { label: "Description", path: "hero_description" },
          { label: "CTA Portfolio Label", path: "cta_portfolio_label" },
          { label: "CTA Consult Label", path: "cta_consult_label" },
        ]
      },
      {
        section: "Layanan Unggulan (Featured Services)",
        fields: [
          { label: "Section Title", path: "featured_title" },
          { label: "Section Subtitle", path: "featured_subtitle" },
          { label: "UI/UX Title", path: "service_uiux_title" },
          { label: "UI/UX Description", path: "service_uiux_desc" },
          { label: "UI/UX Icon", path: "img_uiux_icon" },
          { label: "Web Dev Title", path: "service_web_title" },
          { label: "Web Dev Description", path: "service_web_desc" },
          { label: "Web Dev Icon", path: "img_website_icon" },
          { label: "Merchandise Title", path: "service_merch_title" },
          { label: "Merchandise Description", path: "service_merch_desc" },
          { label: "Merchandise Icon", path: "img_merch_icon" },
          { label: "Corporate Gift Title", path: "service_gift_title" },
          { label: "Corporate Gift Description", path: "service_gift_desc" },
          { label: "Corporate Gift Icon", path: "img_gift_icon" },
          { label: "Drinkware Title", path: "service_drink_title" },
          { label: "Drinkware Description", path: "service_drink_desc" },
          { label: "Drinkware Icon", path: "img_drink_icon" },
          { label: "Logo & Brand Title", path: "service_logo_title" },
          { label: "Logo & Brand Description", path: "service_logo_desc" },
          { label: "Logo & Brand Icon", path: "img_logo_icon" },
        ]
      },
      {
        section: "Semua Layanan (All Services)",
        fields: [
          { label: "Section Title", path: "all_services_title" },
          { label: "Section Subtitle", path: "all_services_subtitle" },
          { label: "Digital Services Header", path: "digital_services_header" },
          { label: "Expertise Badge Text", path: "tv_expertise_badge" },
          { label: "UI/UX Short Desc", path: "service_uiux_short_desc" },
          { label: "UI/UX Price", path: "price_uiux" },
          { label: "Web Dev Short Desc", path: "service_web_short_desc" },
          { label: "Web Dev Price", path: "price_web" },
          { label: "Mobile App Title", path: "service_mobile_title" },
          { label: "Mobile App Description", path: "service_mobile_desc" },
          { label: "Mobile App Price", path: "price_mobile" },
          { label: "Logo Design Short Desc", path: "service_logo_short_desc" },
          { label: "Logo Design Price", path: "price_logo" },
          { label: "Social Media Title", path: "service_sosmed_title" },
          { label: "Social Media Description", path: "service_sosmed_desc" },
          { label: "Social Media Price", path: "price_sosmed" },
          { label: "Digital Marketing Title", path: "service_marketing_title" },
        ]
      },
      {
        section: "Contact CTA",
        fields: [
          { label: "Main Title", path: "contact_cta_title" },
          { label: "Main Subtitle", path: "contact_cta_subtitle" },
          { label: "Contact List Title", path: "contact_list_title" },
          { label: "WhatsApp Title", path: "contact_whatsapp_title" },
          { label: "Phone Title", path: "contact_phone_title" },
          { label: "Email Title", path: "contact_email_title" },
          { label: "CTA Card Title", path: "cta_card_title" },
          { label: "CTA Card Description", path: "cta_card_desc" },
          { label: "WhatsApp Button Label", path: "cta_whatsapp_btn" },
          { label: "Contact Button Label", path: "cta_contact_btn" },
        ]
      }
    ],
    "Page Detail Layanan Logo Design": [
      {
        section: "Breadcrumb",
        fields: [
          { label: "Home Link Text", path: "breadcrumb_home" },
          { label: "Services Link Text", path: "breadcrumb_services" },
          { label: "Current Page Text", path: "breadcrumb_current" },
        ]
      },
      {
        section: "Hero Section",
        fields: [
          { label: "Badge Text", path: "hero_badge" },
          { label: "Title Line 1", path: "hero_title_line1" },
          { label: "Title Line 2", path: "hero_title_line2" },
          { label: "Description", path: "hero_desc" },
          { label: "WhatsApp Button Label", path: "cta_whatsapp_label" },
          { label: "WhatsApp Link", path: "cta_whatsapp_href" },
          { label: "Portfolio Button Label", path: "cta_portfolio_label" },
          { label: "Portfolio Link", path: "cta_portfolio_href" },
        ]
      },
      {
        section: "Why Choose Us (Mengapa Pilih Kami)",
        fields: [
          { label: "Section Title", path: "why_choose_title" },
          { label: "Section Subtitle", path: "why_choose_subtitle" },
          { label: "Feature 1 Title", path: "feature_1_title" },
          { label: "Feature 1 Description", path: "feature_1_desc" },
          { label: "Feature 2 Title", path: "feature_2_title" },
          { label: "Feature 2 Description", path: "feature_2_desc" },
          { label: "Feature 3 Title", path: "feature_3_title" },
          { label: "Feature 3 Description", path: "feature_3_desc" },
          { label: "Feature 4 Title", path: "feature_4_title" },
          { label: "Feature 4 Description", path: "feature_4_desc" },
        ]
      },
      {
        section: "Logo Types (Jenis Logo)",
        fields: [
          { label: "Section Title", path: "types_title" },
          { label: "Section Subtitle", path: "types_subtitle" },
          { label: "Type 1 Name", path: "type_1_name" },
          { label: "Type 1 Description", path: "type_1_desc" },
          { label: "Type 2 Name", path: "type_2_name" },
          { label: "Type 2 Description", path: "type_2_desc" },
          { label: "Type 3 Name", path: "type_3_name" },
          { label: "Type 3 Description", path: "type_3_desc" },
          { label: "Type 4 Name", path: "type_4_name" },
          { label: "Type 4 Description", path: "type_4_desc" },
        ]
      },
      {
        section: "Process (Proses Design)",
        fields: [
          { label: "Section Title", path: "process_title" },
          { label: "Section Subtitle", path: "process_subtitle" },
          { label: "Step 1 Title", path: "process_1_title" },
          { label: "Step 1 Desc", path: "process_1_desc" },
          { label: "Step 1 Duration", path: "process_1_time" },
          { label: "Step 2 Title", path: "process_2_title" },
          { label: "Step 2 Desc", path: "process_2_desc" },
          { label: "Step 2 Duration", path: "process_2_time" },
          { label: "Step 3 Title", path: "process_3_title" },
          { label: "Step 3 Desc", path: "process_3_desc" },
          { label: "Step 3 Duration", path: "process_3_time" },
          { label: "Step 4 Title", path: "process_4_title" },
          { label: "Step 4 Desc", path: "process_4_desc" },
          { label: "Step 4 Duration", path: "process_4_time" },
          { label: "Step 5 Title", path: "process_5_title" },
          { label: "Step 5 Desc", path: "process_5_desc" },
          { label: "Step 5 Duration", path: "process_5_time" },
        ]
      },
      {
        section: "Portfolio",
        fields: [
          { label: "Section Title", path: "portfolio_title" },
          { label: "Section Subtitle", path: "portfolio_subtitle" },
          { label: "Download Alert Message", path: "alert_portfolio_download" },
          { label: "Download Button Label", path: "cta_download_portfolio" },
          { label: "Item 1 Title", path: "portfolio_1_title" },
          { label: "Item 1 Category", path: "portfolio_1_cat" },
          { label: "Item 1 Style", path: "portfolio_1_style" },
          { label: "Item 1 Desc", path: "portfolio_1_desc" },
          { label: "Item 2 Title", path: "portfolio_2_title" },
          { label: "Item 2 Category", path: "portfolio_2_cat" },
          { label: "Item 2 Style", path: "portfolio_2_style" },
          { label: "Item 2 Desc", path: "portfolio_2_desc" },
          { label: "Item 3 Title", path: "portfolio_3_title" },
          { label: "Item 3 Category", path: "portfolio_3_cat" },
          { label: "Item 3 Style", path: "portfolio_3_style" },
          { label: "Item 3 Desc", path: "portfolio_3_desc" },
        ]
      },
      {
        section: "Pricing Packages",
        fields: [
          { label: "Section Title", path: "pricing_title" },
          { label: "Plan 1 Name", path: "price_1_name" },
          { label: "Plan 1 Cost", path: "price_1_cost" },
          { label: "Plan 1 Duration", path: "price_1_time" },
          { label: "Plan 1 Best For", path: "price_1_best" },
          { label: "Plan 1 Feature 1", path: "price_1_feat_1" },
          { label: "Plan 1 Feature 2", path: "price_1_feat_2" },
          { label: "Plan 1 Feature 3", path: "price_1_feat_3" },
          { label: "Plan 1 Feature 4", path: "price_1_feat_4" },
          { label: "Plan 1 Feature 5", path: "price_1_feat_5" },
          { label: "Plan 2 Name", path: "price_2_name" },
          { label: "Plan 2 Cost", path: "price_2_cost" },
          { label: "Plan 2 Duration", path: "price_2_time" },
          { label: "Plan 2 Best For", path: "price_2_best" },
          { label: "Plan 2 Feature 1", path: "price_2_feat_1" },
          { label: "Plan 2 Feature 2", path: "price_2_feat_2" },
          { label: "Plan 2 Feature 3", path: "price_2_feat_3" },
          { label: "Plan 2 Feature 4", path: "price_2_feat_4" },
          { label: "Plan 2 Feature 5", path: "price_2_feat_5" },
          { label: "Plan 2 Feature 6", path: "price_2_feat_6" },
          { label: "Plan 2 Feature 7", path: "price_2_feat_7" },
          { label: "Plan 3 Name", path: "price_3_name" },
          { label: "Plan 3 Cost", path: "price_3_cost" },
          { label: "Plan 3 Duration", path: "price_3_time" },
          { label: "Plan 3 Best For", path: "price_3_best" },
          { label: "Plan 3 Feature 1", path: "price_3_feat_1" },
          { label: "Plan 3 Feature 2", path: "price_3_feat_2" },
          { label: "Plan 3 Feature 3", path: "price_3_feat_3" },
          { label: "Plan 3 Feature 4", path: "price_3_feat_4" },
          { label: "Plan 3 Feature 5", path: "price_3_feat_5" },
          { label: "Plan 3 Feature 6", path: "price_3_feat_6" },
          { label: "Plan 3 Feature 7", path: "price_3_feat_7" },
          { label: "Plan 3 Feature 8", path: "price_3_feat_8" },
        ]
      }
    ],
    "Page Detail Layanan Custom Merchandise": [
      {
        section: "Thermos & Vacuum Flask Collection",
        fields: [
          { label: "Product 1 Name", path: "product_thermos_1_name" },
          { label: "Product 1 Desc", path: "product_thermos_1_desc" },
          { label: "Product 1 Price", path: "product_thermos_1_price" },
          { label: "Product 1 Time", path: "product_thermos_1_time" },
          { label: "Product 2 Name", path: "product_thermos_2_name" },
          { label: "Product 2 Desc", path: "product_thermos_2_desc" },
          { label: "Product 2 Price", path: "product_thermos_2_price" },
          { label: "Product 2 Time", path: "product_thermos_2_time" },
          { label: "Product 3 Name", path: "product_thermos_3_name" },
          { label: "Product 3 Desc", path: "product_thermos_3_desc" },
          { label: "Product 3 Price", path: "product_thermos_3_price" },
          { label: "Product 3 Time", path: "product_thermos_3_time" },
          { label: "Product 4 Name", path: "product_thermos_4_name" },
          { label: "Product 4 Desc", path: "product_thermos_4_desc" },
          { label: "Product 4 Price", path: "product_thermos_4_price" },
          { label: "Product 4 Time", path: "product_thermos_4_time" },
          { label: "Product 5 Name", path: "product_thermos_5_name" },
          { label: "Product 5 Desc", path: "product_thermos_5_desc" },
          { label: "Product 5 Price", path: "product_thermos_5_price" },
          { label: "Product 5 Time", path: "product_thermos_5_time" },
          { label: "Product 6 Name", path: "product_thermos_6_name" },
          { label: "Product 6 Desc", path: "product_thermos_6_desc" },
          { label: "Product 6 Price", path: "product_thermos_6_price" },
          { label: "Product 6 Time", path: "product_thermos_6_time" },
        ]
      },
      {
        section: "Aluminum Bottles Collection",
        fields: [
          { label: "Product 1 Name", path: "product_alum_1_name" },
          { label: "Product 1 Desc", path: "product_alum_1_desc" },
          { label: "Product 1 Price", path: "product_alum_1_price" },
          { label: "Product 1 Time", path: "product_alum_1_time" },
          { label: "Product 2 Name", path: "product_alum_2_name" },
          { label: "Product 2 Desc", path: "product_alum_2_desc" },
          { label: "Product 2 Price", path: "product_alum_2_price" },
          { label: "Product 2 Time", path: "product_alum_2_time" },
          { label: "Product 3 Name", path: "product_alum_3_name" },
          { label: "Product 3 Desc", path: "product_alum_3_desc" },
          { label: "Product 3 Price", path: "product_alum_3_price" },
          { label: "Product 3 Time", path: "product_alum_3_time" },
          { label: "Product 4 Name", path: "product_alum_4_name" },
          { label: "Product 4 Desc", path: "product_alum_4_desc" },
          { label: "Product 4 Price", path: "product_alum_4_price" },
          { label: "Product 4 Time", path: "product_alum_4_time" },
        ]
      },
      {
        section: "Tumbler Stainless Collection",
        fields: [
          { label: "Product 1 Name", path: "product_tumbler_1_name" },
          { label: "Product 1 Desc", path: "product_tumbler_1_desc" },
          { label: "Product 1 Price", path: "product_tumbler_1_price" },
          { label: "Product 1 Time", path: "product_tumbler_1_time" },
          { label: "Product 2 Name", path: "product_tumbler_2_name" },
          { label: "Product 2 Desc", path: "product_tumbler_2_desc" },
          { label: "Product 2 Price", path: "product_tumbler_2_price" },
          { label: "Product 2 Time", path: "product_tumbler_2_time" },
          { label: "Product 3 Name", path: "product_tumbler_3_name" },
          { label: "Product 3 Desc", path: "product_tumbler_3_desc" },
          { label: "Product 3 Price", path: "product_tumbler_3_price" },
          { label: "Product 3 Time", path: "product_tumbler_3_time" },
          { label: "Product 4 Name", path: "product_tumbler_4_name" },
          { label: "Product 4 Desc", path: "product_tumbler_4_desc" },
          { label: "Product 4 Price", path: "product_tumbler_4_price" },
          { label: "Product 4 Time", path: "product_tumbler_4_time" },
        ]
      },
      {
        section: "Water Bottles Collection",
        fields: [
          { label: "Product 1 Name", path: "product_water_1_name" },
          { label: "Product 1 Desc", path: "product_water_1_desc" },
          { label: "Product 1 Price", path: "product_water_1_price" },
          { label: "Product 1 Time", path: "product_water_1_time" },
        ]
      }
    ],
    "Page Detail layanan Social Media": [
      {
        section: "Platform Data",
        fields: [
          { label: "Platform 1 Name", path: "platform_1_name" },
          { label: "Platform 1 Audience", path: "platform_1_audience" },
          { label: "Platform 1 Service 1", path: "platform_1_service_1" },
          { label: "Platform 1 Service 2", path: "platform_1_service_2" },
          { label: "Platform 1 Service 3", path: "platform_1_service_3" },
          { label: "Platform 1 Service 4", path: "platform_1_service_4" },
          { label: "Platform 2 Name", path: "platform_2_name" },
          { label: "Platform 2 Audience", path: "platform_2_audience" },
          { label: "Platform 2 Service 1", path: "platform_2_service_1" },
          { label: "Platform 2 Service 2", path: "platform_2_service_2" },
          { label: "Platform 2 Service 3", path: "platform_2_service_3" },
          { label: "Platform 2 Service 4", path: "platform_2_service_4" },
          { label: "Platform 3 Name", path: "platform_3_name" },
          { label: "Platform 3 Audience", path: "platform_3_audience" },
          { label: "Platform 3 Service 1", path: "platform_3_service_1" },
          { label: "Platform 3 Service 2", path: "platform_3_service_2" },
          { label: "Platform 3 Service 3", path: "platform_3_service_3" },
          { label: "Platform 3 Service 4", path: "platform_3_service_4" },
          { label: "Platform 4 Name", path: "platform_4_name" },
          { label: "Platform 4 Audience", path: "platform_4_audience" },
          { label: "Platform 4 Service 1", path: "platform_4_service_1" },
          { label: "Platform 4 Service 2", path: "platform_4_service_2" },
          { label: "Platform 4 Service 3", path: "platform_4_service_3" },
          { label: "Platform 4 Service 4", path: "platform_4_service_4" },
        ]
      },
      {
        section: "Pricing Plans",
        fields: [
          { label: "Plan 1 Name", path: "pricing_1_name" },
          { label: "Plan 1 Desc", path: "pricing_1_desc" },
        ]
      }
    ],
    "page-layanan": [
      {
        section: "Hero Section",
        fields: [
          { label: "Hero Title", path: "hero_title" },
          { label: "Hero Subtitle", path: "hero_subtitle" }
        ]
      },
      {
        section: "Service Categories",
        fields: [
          { label: "UI/UX Title", path: "cat_uiux_title" },
          { label: "UI/UX Desc", path: "cat_uiux_desc" },
          { label: "UI/UX CTA", path: "cta_uiux_label" },
          { label: "Web & App Title", path: "cat_webapk_title" },
          { label: "Web & App Desc", path: "cat_webapk_desc" },
          { label: "Logo Design Title", path: "cat_logo_title" },
          { label: "Logo Design Desc", path: "cat_logo_desc" },
          { label: "Social Media Title", path: "cat_social_title" },
          { label: "Social Media Desc", path: "cat_social_desc" },
          { label: "Merchandise Title", path: "cat_merch_title" },
          { label: "Merchandise Desc", path: "cat_merch_desc" }
        ]
      },
      {
        section: "Detailed Services (UI/UX)",
        fields: [
          { label: "Detail Title", path: "detail_title" },
          { label: "Detail Subtitle", path: "detail_subtitle" },
          { label: "Service 1 Title", path: "services.items.0.title" },
          { label: "Service 1 Desc", path: "services.items.0.desc" },
          { label: "Service 1 Price", path: "svc_uiux_price" },
          { label: "Service 1 Duration", path: "svc_uiux_duration" }
        ]
      },
      {
        section: "Detailed Services (Web & App)",
        fields: [
          { label: "Service 2 Title", path: "services.items.1.title" },
          { label: "Service 2 Desc", path: "services.items.1.desc" },
          { label: "Service 2 Price", path: "svc_web_price" },
          { label: "Service 2 Duration", path: "svc_web_duration" },
          { label: "App Title", path: "svc_app_title" },
          { label: "App Desc", path: "svc_app_desc" },
          { label: "App Price", path: "svc_app_price" },
          { label: "App Duration", path: "svc_app_duration" }
        ]
      },
      {
        section: "Detailed Services (Logo & Branding)",
        fields: [
          { label: "Logo Title", path: "svc_logo_title" },
          { label: "Logo Desc", path: "svc_logo_desc" },
          { label: "Logo Price", path: "svc_logo_price" },
          { label: "Logo Duration", path: "svc_logo_duration" },
          { label: "Branding Title", path: "svc_brand_title" },
          { label: "Branding Desc", path: "svc_brand_desc" },
          { label: "Branding Price", path: "svc_brand_price" },
          { label: "Branding Duration", path: "svc_brand_duration" }
        ]
      }
    ],
    "page-portfolio": [
      {
        section: "Hero & CTA",
        fields: [
          { label: "Hero Title", path: "hero_title" },
          { label: "All Works Label", path: "cta_all_works_label" }
        ]
      },
      {
        section: "Portfolio Items",
        fields: [
          { label: "Item 1 Title", path: "items.0.title" },
          { label: "Item 1 Description", path: "items.0.description" },
          { label: "Item 1 Category", path: "items.0.category" },
          { label: "Item 1 Year", path: "items.0.year" },
          { label: "Item 1 Client", path: "items.0.client" },
          { label: "Item 1 Tag", path: "items.0.tag" },
          { label: "Item 1 Link", path: "items.0.link" },
          { label: "Item 2 Title", path: "items.1.title" },
          { label: "Item 2 Description", path: "items.1.description" },
          { label: "Item 3 Title", path: "items.2.title" },
          { label: "Item 3 Description", path: "items.2.description" }
        ]
      }
    ],
    "page layanan detail ui_ux": [
      {
        section: "Breadcrumb",
        fields: [
          { label: "Home Link Text", path: "breadcrumb_home" },
          { label: "Services Link Text", path: "breadcrumb_services" },
          { label: "Current Page Text", path: "breadcrumb_current" }
        ]
      },
      {
        section: "Offerings",
        fields: [
          { label: "Section Title", path: "offerings_title" },
          { label: "Section Subtitle", path: "offerings_subtitle" },
          { label: "Offering 1 Title", path: "offering_1_title" },
          { label: "Offering 1 Description", path: "offering_1_desc" },
          { label: "Offering 2 Title", path: "offering_2_title" },
          { label: "Offering 2 Description", path: "offering_2_desc" },
          { label: "Offering 3 Title", path: "offering_3_title" },
          { label: "Offering 3 Description", path: "offering_3_desc" },
          { label: "Offering 4 Title", path: "offering_4_title" },
          { label: "Offering 4 Description", path: "offering_4_desc" }
        ]
      },
      {
        section: "Process",
        fields: [
          { label: "Section Title", path: "process_title" },
          { label: "Section Subtitle", path: "process_subtitle" },
          { label: "Step 1 Title", path: "process_1_title" },
          { label: "Step 1 Description", path: "process_1_desc" },
          { label: "Step 1 Duration", path: "process_1_duration" },
          { label: "Step 2 Title", path: "process_2_title" },
          { label: "Step 2 Description", path: "process_2_desc" },
          { label: "Step 2 Duration", path: "process_2_duration" },
          { label: "Step 3 Title", path: "process_3_title" },
          { label: "Step 3 Description", path: "process_3_desc" },
          { label: "Step 3 Duration", path: "process_3_duration" },
          { label: "Step 4 Title", path: "process_4_title" },
          { label: "Step 4 Description", path: "process_4_desc" },
          { label: "Step 4 Duration", path: "process_4_duration" },
          { label: "Step 5 Title", path: "process_5_title" },
          { label: "Step 5 Description", path: "process_5_desc" },
          { label: "Step 5 Duration", path: "process_5_duration" },
          { label: "Step 6 Title", path: "process_6_title" },
          { label: "Step 6 Description", path: "process_6_desc" },
          { label: "Step 6 Duration", path: "process_6_duration" }
        ]
      },
      {
        section: "Portfolio",
        fields: [
          { label: "Section Title", path: "portfolio_title" },
          { label: "Section Subtitle", path: "portfolio_subtitle" },
          { label: "Item 1 Tag", path: "portfolio_1_tag" },
          { label: "Item 1 Title", path: "portfolio_1_title" },
          { label: "Item 1 Description", path: "portfolio_1_desc" },
          { label: "Item 2 Tag", path: "portfolio_2_tag" },
          { label: "Item 2 Title", path: "portfolio_2_title" },
          { label: "Item 2 Description", path: "portfolio_2_desc" },
          { label: "Item 3 Tag", path: "portfolio_3_tag" },
          { label: "Item 3 Title", path: "portfolio_3_title" },
          { label: "Item 3 Description", path: "portfolio_3_desc" },
          { label: "View All Button Label", path: "portfolio_button" }
        ]
      },
      {
        section: "Pricing",
        fields: [
          { label: "Section Title", path: "pricing_title" },
          { label: "Section Subtitle", path: "pricing_subtitle" },
          { label: "Plan 1 Name", path: "pricing_plan_1_name" },
          { label: "Plan 1 Price", path: "pricing_plan_1_price" },
          { label: "Plan 1 Duration", path: "pricing_plan_1_duration" },
          { label: "Plan 1 Feature 1", path: "pricing_plan_1_feature_1" },
          { label: "Plan 1 Feature 2", path: "pricing_plan_1_feature_2" },
          { label: "Plan 1 Feature 3", path: "pricing_plan_1_feature_3" },
          { label: "Plan 1 Feature 4", path: "pricing_plan_1_feature_4" },
          { label: "Plan 1 Feature 5", path: "pricing_plan_1_feature_5" },
          { label: "Plan 2 Name", path: "pricing_plan_2_name" },
          { label: "Plan 2 Price", path: "pricing_plan_2_price" },
          { label: "Plan 2 Duration", path: "pricing_plan_2_duration" },
          { label: "Plan 2 Feature 1", path: "pricing_plan_2_feature_1" },
          { label: "Plan 2 Feature 2", path: "pricing_plan_2_feature_2" },
          { label: "Plan 2 Feature 3", path: "pricing_plan_2_feature_3" },
          { label: "Plan 2 Feature 4", path: "pricing_plan_2_feature_4" },
          { label: "Plan 2 Feature 5", path: "pricing_plan_2_feature_5" },
          { label: "Plan 2 Feature 6", path: "pricing_plan_2_feature_6" },
          { label: "Plan 2 Feature 7", path: "pricing_plan_2_feature_7" },
          { label: "Plan 3 Name", path: "pricing_plan_3_name" },
          { label: "Plan 3 Price", path: "pricing_plan_3_price" },
          { label: "Plan 3 Duration", path: "pricing_plan_3_duration" },
          { label: "Plan 3 Feature 1", path: "pricing_plan_3_feature_1" },
          { label: "Plan 3 Feature 2", path: "pricing_plan_3_feature_2" },
          { label: "Plan 3 Feature 3", path: "pricing_plan_3_feature_3" },
          { label: "Plan 3 Feature 4", path: "pricing_plan_3_feature_4" },
          { label: "Plan 3 Feature 5", path: "pricing_plan_3_feature_5" },
          { label: "Plan 3 Feature 6", path: "pricing_plan_3_feature_6" },
          { label: "Plan 3 Feature 7", path: "pricing_plan_3_feature_7" },
          { label: "Plan 3 Feature 8", path: "pricing_plan_3_feature_8" },
          { label: "Select Button Label", path: "pricing_button_select" }
        ]
      },
      {
        section: "Testimonials",
        fields: [
          { label: "Section Title", path: "testimonials_title" },
          { label: "Section Subtitle", path: "testimonials_subtitle" },
          { label: "Testimonial 1 Text", path: "testimonial_1_text" },
          { label: "Testimonial 1 Author", path: "testimonial_1_authorName" },
          { label: "Testimonial 1 Position", path: "testimonial_1_authorPosition" },
          { label: "Testimonial 2 Text", path: "testimonial_2_text" },
          { label: "Testimonial 2 Author", path: "testimonial_2_authorName" },
          { label: "Testimonial 2 Position", path: "testimonial_2_authorPosition" }
        ]
      },
      {
        section: "CTA",
        fields: [
          { label: "Title", path: "cta_title" },
          { label: "Subtitle", path: "cta_subtitle" },
          { label: "WhatsApp Link", path: "cta_whatsapp_href" },
          { label: "WhatsApp Label", path: "cta_whatsapp_label" },
          { label: "Portfolio Link", path: "cta_portfolio_href" },
          { label: "Portfolio Label", path: "cta_portfolio_label" }
        ]
      },
      {
        section: "Footer",
        fields: [
          { label: "Logo Alt", path: "footer_logo_alt" },
          { label: "About Text", path: "footer_about" },
          { label: "Services Title", path: "footer_services_title" },
          { label: "Service Item 1", path: "footer_service_1" },
          { label: "Service Item 2", path: "footer_service_2" },
          { label: "Service Item 3", path: "footer_service_3" },
          { label: "Service Item 4", path: "footer_service_4" },
          { label: "Service Item 5", path: "footer_service_5" },
          { label: "Resources Title", path: "footer_resources_title" }
        ]
      }
    ]
  };
