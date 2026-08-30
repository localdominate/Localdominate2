export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      ab_test_engagement: {
        Row: {
          clicked_cta: boolean | null
          completed_checkout: boolean | null
          created_at: string | null
          cta_hover_count: number | null
          cta_hover_duration_ms: number | null
          element_interactions: number | null
          engagement_score: number | null
          id: string
          intent_score: number | null
          max_scroll_depth: number | null
          price_hover_duration_ms: number | null
          scroll_past_cta: boolean | null
          scroll_to_cta_percent: number | null
          session_duration_ms: number | null
          session_id: string
          started_checkout: boolean | null
          test_id: string
          time_on_offer_section_ms: number | null
          time_to_first_click_ms: number | null
          time_to_first_cta_ms: number | null
          variant: string
          viewed_cta: boolean | null
          viewed_hero: boolean | null
          viewed_offer: boolean | null
          viewed_testimonials: boolean | null
        }
        Insert: {
          clicked_cta?: boolean | null
          completed_checkout?: boolean | null
          created_at?: string | null
          cta_hover_count?: number | null
          cta_hover_duration_ms?: number | null
          element_interactions?: number | null
          engagement_score?: number | null
          id?: string
          intent_score?: number | null
          max_scroll_depth?: number | null
          price_hover_duration_ms?: number | null
          scroll_past_cta?: boolean | null
          scroll_to_cta_percent?: number | null
          session_duration_ms?: number | null
          session_id: string
          started_checkout?: boolean | null
          test_id: string
          time_on_offer_section_ms?: number | null
          time_to_first_click_ms?: number | null
          time_to_first_cta_ms?: number | null
          variant: string
          viewed_cta?: boolean | null
          viewed_hero?: boolean | null
          viewed_offer?: boolean | null
          viewed_testimonials?: boolean | null
        }
        Update: {
          clicked_cta?: boolean | null
          completed_checkout?: boolean | null
          created_at?: string | null
          cta_hover_count?: number | null
          cta_hover_duration_ms?: number | null
          element_interactions?: number | null
          engagement_score?: number | null
          id?: string
          intent_score?: number | null
          max_scroll_depth?: number | null
          price_hover_duration_ms?: number | null
          scroll_past_cta?: boolean | null
          scroll_to_cta_percent?: number | null
          session_duration_ms?: number | null
          session_id?: string
          started_checkout?: boolean | null
          test_id?: string
          time_on_offer_section_ms?: number | null
          time_to_first_click_ms?: number | null
          time_to_first_cta_ms?: number | null
          variant?: string
          viewed_cta?: boolean | null
          viewed_hero?: boolean | null
          viewed_offer?: boolean | null
          viewed_testimonials?: boolean | null
        }
        Relationships: []
      }
      ab_test_views: {
        Row: {
          created_at: string | null
          id: string
          page_url: string | null
          session_id: string
          test_id: string
          variant: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          page_url?: string | null
          session_id: string
          test_id: string
          variant: string
        }
        Update: {
          created_at?: string | null
          id?: string
          page_url?: string | null
          session_id?: string
          test_id?: string
          variant?: string
        }
        Relationships: []
      }
      ab_tests: {
        Row: {
          auto_managed: boolean | null
          config: Json | null
          created_at: string | null
          description: string | null
          element_id: string | null
          element_type: string | null
          end_date: string | null
          id: string
          is_ready: boolean | null
          name: string
          start_date: string | null
          status: string | null
          target_sample_size: number | null
          test_id: string
          traffic_split_a: number | null
          traffic_split_b: number | null
          updated_at: string | null
          variants: Json
          winning_variant: string | null
        }
        Insert: {
          auto_managed?: boolean | null
          config?: Json | null
          created_at?: string | null
          description?: string | null
          element_id?: string | null
          element_type?: string | null
          end_date?: string | null
          id?: string
          is_ready?: boolean | null
          name: string
          start_date?: string | null
          status?: string | null
          target_sample_size?: number | null
          test_id: string
          traffic_split_a?: number | null
          traffic_split_b?: number | null
          updated_at?: string | null
          variants?: Json
          winning_variant?: string | null
        }
        Update: {
          auto_managed?: boolean | null
          config?: Json | null
          created_at?: string | null
          description?: string | null
          element_id?: string | null
          element_type?: string | null
          end_date?: string | null
          id?: string
          is_ready?: boolean | null
          name?: string
          start_date?: string | null
          status?: string | null
          target_sample_size?: number | null
          test_id?: string
          traffic_split_a?: number | null
          traffic_split_b?: number | null
          updated_at?: string | null
          variants?: Json
          winning_variant?: string | null
        }
        Relationships: []
      }
      analytics_conversions: {
        Row: {
          ab_test_id: string | null
          ab_variant_color: string | null
          ab_variant_restaurant: string | null
          amount: number | null
          blog_article_slug: string | null
          blog_cta_position: string | null
          blog_cta_variant: string | null
          conversion_type: string
          created_at: string
          cta_location: string | null
          cta_text: string | null
          id: string
          page_path: string | null
          payment_verified: boolean | null
          session_id: string | null
          stripe_session_id: string | null
        }
        Insert: {
          ab_test_id?: string | null
          ab_variant_color?: string | null
          ab_variant_restaurant?: string | null
          amount?: number | null
          blog_article_slug?: string | null
          blog_cta_position?: string | null
          blog_cta_variant?: string | null
          conversion_type: string
          created_at?: string
          cta_location?: string | null
          cta_text?: string | null
          id?: string
          page_path?: string | null
          payment_verified?: boolean | null
          session_id?: string | null
          stripe_session_id?: string | null
        }
        Update: {
          ab_test_id?: string | null
          ab_variant_color?: string | null
          ab_variant_restaurant?: string | null
          amount?: number | null
          blog_article_slug?: string | null
          blog_cta_position?: string | null
          blog_cta_variant?: string | null
          conversion_type?: string
          created_at?: string
          cta_location?: string | null
          cta_text?: string | null
          id?: string
          page_path?: string | null
          payment_verified?: boolean | null
          session_id?: string | null
          stripe_session_id?: string | null
        }
        Relationships: []
      }
      analytics_events: {
        Row: {
          created_at: string
          event_data: Json | null
          event_name: string | null
          event_type: string
          id: string
          page_path: string | null
          session_id: string
        }
        Insert: {
          created_at?: string
          event_data?: Json | null
          event_name?: string | null
          event_type: string
          id?: string
          page_path?: string | null
          session_id: string
        }
        Update: {
          created_at?: string
          event_data?: Json | null
          event_name?: string | null
          event_type?: string
          id?: string
          page_path?: string | null
          session_id?: string
        }
        Relationships: []
      }
      analytics_heatmap: {
        Row: {
          created_at: string
          element_path: string | null
          id: string
          interaction_type: string | null
          page_path: string | null
          session_id: string | null
          x: number
          y: number
        }
        Insert: {
          created_at?: string
          element_path?: string | null
          id?: string
          interaction_type?: string | null
          page_path?: string | null
          session_id?: string | null
          x: number
          y: number
        }
        Update: {
          created_at?: string
          element_path?: string | null
          id?: string
          interaction_type?: string | null
          page_path?: string | null
          session_id?: string | null
          x?: number
          y?: number
        }
        Relationships: []
      }
      analytics_heatmap_enhanced: {
        Row: {
          ab_variant: string | null
          created_at: string | null
          device: string | null
          element_selector: string | null
          element_text: string | null
          element_type: string | null
          hover_duration_ms: number | null
          id: string
          interaction_type: string | null
          is_dead_click: boolean | null
          is_missed_cta: boolean | null
          is_rage_click: boolean | null
          page_path: string | null
          section_name: string | null
          session_id: string
          viewport_height: number | null
          viewport_width: number | null
          x_percent: number | null
          y_percent: number | null
        }
        Insert: {
          ab_variant?: string | null
          created_at?: string | null
          device?: string | null
          element_selector?: string | null
          element_text?: string | null
          element_type?: string | null
          hover_duration_ms?: number | null
          id?: string
          interaction_type?: string | null
          is_dead_click?: boolean | null
          is_missed_cta?: boolean | null
          is_rage_click?: boolean | null
          page_path?: string | null
          section_name?: string | null
          session_id: string
          viewport_height?: number | null
          viewport_width?: number | null
          x_percent?: number | null
          y_percent?: number | null
        }
        Update: {
          ab_variant?: string | null
          created_at?: string | null
          device?: string | null
          element_selector?: string | null
          element_text?: string | null
          element_type?: string | null
          hover_duration_ms?: number | null
          id?: string
          interaction_type?: string | null
          is_dead_click?: boolean | null
          is_missed_cta?: boolean | null
          is_rage_click?: boolean | null
          page_path?: string | null
          section_name?: string | null
          session_id?: string
          viewport_height?: number | null
          viewport_width?: number | null
          x_percent?: number | null
          y_percent?: number | null
        }
        Relationships: []
      }
      analytics_sessions: {
        Row: {
          ab_variant_color: string | null
          ab_variant_restaurant: string | null
          created_at: string
          device: string | null
          end_time: string | null
          entry_page: string | null
          exit_page: string | null
          id: string
          page_views: number | null
          referrer: string | null
          scroll_depths: number[] | null
          session_id: string
          start_time: string
          user_agent: string | null
        }
        Insert: {
          ab_variant_color?: string | null
          ab_variant_restaurant?: string | null
          created_at?: string
          device?: string | null
          end_time?: string | null
          entry_page?: string | null
          exit_page?: string | null
          id?: string
          page_views?: number | null
          referrer?: string | null
          scroll_depths?: number[] | null
          session_id: string
          start_time?: string
          user_agent?: string | null
        }
        Update: {
          ab_variant_color?: string | null
          ab_variant_restaurant?: string | null
          created_at?: string
          device?: string | null
          end_time?: string | null
          entry_page?: string | null
          exit_page?: string | null
          id?: string
          page_views?: number | null
          referrer?: string | null
          scroll_depths?: number[] | null
          session_id?: string
          start_time?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      auto_test_queue: {
        Row: {
          created_at: string
          current_variant_a: string | null
          current_variant_b: string | null
          current_winner: string | null
          element_id: string
          element_type: string
          id: string
          max_variants: number
          priority: number
          status: string
          tested_variants: Json
          updated_at: string
          variants_to_test: Json
        }
        Insert: {
          created_at?: string
          current_variant_a?: string | null
          current_variant_b?: string | null
          current_winner?: string | null
          element_id: string
          element_type: string
          id?: string
          max_variants?: number
          priority?: number
          status?: string
          tested_variants?: Json
          updated_at?: string
          variants_to_test?: Json
        }
        Update: {
          created_at?: string
          current_variant_a?: string | null
          current_variant_b?: string | null
          current_winner?: string | null
          element_id?: string
          element_type?: string
          id?: string
          max_variants?: number
          priority?: number
          status?: string
          tested_variants?: Json
          updated_at?: string
          variants_to_test?: Json
        }
        Relationships: []
      }
      blog_article_views: {
        Row: {
          article_slug: string
          article_title: string | null
          created_at: string
          device: string | null
          engagement_score: number | null
          exit_time: string | null
          finished_reading: boolean | null
          id: string
          max_scroll_depth: number | null
          page_path: string | null
          reading_time_seconds: number | null
          referrer: string | null
          scroll_milestones: number[] | null
          session_id: string | null
        }
        Insert: {
          article_slug: string
          article_title?: string | null
          created_at?: string
          device?: string | null
          engagement_score?: number | null
          exit_time?: string | null
          finished_reading?: boolean | null
          id?: string
          max_scroll_depth?: number | null
          page_path?: string | null
          reading_time_seconds?: number | null
          referrer?: string | null
          scroll_milestones?: number[] | null
          session_id?: string | null
        }
        Update: {
          article_slug?: string
          article_title?: string | null
          created_at?: string
          device?: string | null
          engagement_score?: number | null
          exit_time?: string | null
          finished_reading?: boolean | null
          id?: string
          max_scroll_depth?: number | null
          page_path?: string | null
          reading_time_seconds?: number | null
          referrer?: string | null
          scroll_milestones?: number[] | null
          session_id?: string | null
        }
        Relationships: []
      }
      conversion_reports: {
        Row: {
          avg_engagement_score: number | null
          avg_time_to_first_cta_seconds: number | null
          checkout_completion_rate: number | null
          conversion_rate: number | null
          created_at: string
          created_by: string | null
          cta_by_location: Json | null
          cta_click_rate: number | null
          funnel_data: Json | null
          id: string
          lead_rate: number | null
          lead_sources: Json | null
          notes: string | null
          recommendations: Json | null
          report_date: string
          top_pages: Json | null
          total_conversions: number | null
          total_leads: number | null
          total_sessions: number | null
        }
        Insert: {
          avg_engagement_score?: number | null
          avg_time_to_first_cta_seconds?: number | null
          checkout_completion_rate?: number | null
          conversion_rate?: number | null
          created_at?: string
          created_by?: string | null
          cta_by_location?: Json | null
          cta_click_rate?: number | null
          funnel_data?: Json | null
          id?: string
          lead_rate?: number | null
          lead_sources?: Json | null
          notes?: string | null
          recommendations?: Json | null
          report_date?: string
          top_pages?: Json | null
          total_conversions?: number | null
          total_leads?: number | null
          total_sessions?: number | null
        }
        Update: {
          avg_engagement_score?: number | null
          avg_time_to_first_cta_seconds?: number | null
          checkout_completion_rate?: number | null
          conversion_rate?: number | null
          created_at?: string
          created_by?: string | null
          cta_by_location?: Json | null
          cta_click_rate?: number | null
          funnel_data?: Json | null
          id?: string
          lead_rate?: number | null
          lead_sources?: Json | null
          notes?: string | null
          recommendations?: Json | null
          report_date?: string
          top_pages?: Json | null
          total_conversions?: number | null
          total_leads?: number | null
          total_sessions?: number | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          address: string | null
          business_category:
            | Database["public"]["Enums"]["business_category"]
            | null
          business_name: string | null
          created_at: string
          email: string | null
          id: string
          is_seeded: boolean | null
          payment_amount: number | null
          payment_completed_at: string | null
          payment_status: string | null
          phone: string | null
          questionnaire_completed: boolean | null
          questionnaire_completed_at: string | null
          stripe_customer_id: string | null
          stripe_session_id: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          address?: string | null
          business_category?:
            | Database["public"]["Enums"]["business_category"]
            | null
          business_name?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_seeded?: boolean | null
          payment_amount?: number | null
          payment_completed_at?: string | null
          payment_status?: string | null
          phone?: string | null
          questionnaire_completed?: boolean | null
          questionnaire_completed_at?: string | null
          stripe_customer_id?: string | null
          stripe_session_id?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          address?: string | null
          business_category?:
            | Database["public"]["Enums"]["business_category"]
            | null
          business_name?: string | null
          created_at?: string
          email?: string | null
          id?: string
          is_seeded?: boolean | null
          payment_amount?: number | null
          payment_completed_at?: string | null
          payment_status?: string | null
          phone?: string | null
          questionnaire_completed?: boolean | null
          questionnaire_completed_at?: string | null
          stripe_customer_id?: string | null
          stripe_session_id?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      daily_reports: {
        Row: {
          created_at: string
          id: string
          report_date: string
          sent_at: string | null
          total_conversions: number | null
          total_revenue: number | null
          total_sessions: number | null
          variant_analysis: Json | null
        }
        Insert: {
          created_at?: string
          id?: string
          report_date: string
          sent_at?: string | null
          total_conversions?: number | null
          total_revenue?: number | null
          total_sessions?: number | null
          variant_analysis?: Json | null
        }
        Update: {
          created_at?: string
          id?: string
          report_date?: string
          sent_at?: string | null
          total_conversions?: number | null
          total_revenue?: number | null
          total_sessions?: number | null
          variant_analysis?: Json | null
        }
        Relationships: []
      }
      internal_linking_audits: {
        Row: {
          article_slug: string
          article_title: string
          audit_date: string
          audit_score: number
          created_at: string
          has_pillar_link: boolean
          hub_category: string | null
          id: string
          is_orphan_page: boolean
          link_density: number | null
          missing_pillar_links: Json | null
          missing_sibling_links: Json | null
          pillar_link_count: number
          primary_hub: string | null
          recommendations: Json | null
          sibling_links_count: number
          total_outbound_links: number
          updated_at: string
        }
        Insert: {
          article_slug: string
          article_title: string
          audit_date?: string
          audit_score?: number
          created_at?: string
          has_pillar_link?: boolean
          hub_category?: string | null
          id?: string
          is_orphan_page?: boolean
          link_density?: number | null
          missing_pillar_links?: Json | null
          missing_sibling_links?: Json | null
          pillar_link_count?: number
          primary_hub?: string | null
          recommendations?: Json | null
          sibling_links_count?: number
          total_outbound_links?: number
          updated_at?: string
        }
        Update: {
          article_slug?: string
          article_title?: string
          audit_date?: string
          audit_score?: number
          created_at?: string
          has_pillar_link?: boolean
          hub_category?: string | null
          id?: string
          is_orphan_page?: boolean
          link_density?: number | null
          missing_pillar_links?: Json | null
          missing_sibling_links?: Json | null
          pillar_link_count?: number
          primary_hub?: string | null
          recommendations?: Json | null
          sibling_links_count?: number
          total_outbound_links?: number
          updated_at?: string
        }
        Relationships: []
      }
      keyword_performance: {
        Row: {
          avg_scroll_depth: number | null
          avg_session_duration_ms: number | null
          bounce_rate: number | null
          conversions: number | null
          created_at: string | null
          date: string
          id: string
          impressions: number | null
          keyword: string
          revenue: number | null
          sessions: number | null
          source: string | null
        }
        Insert: {
          avg_scroll_depth?: number | null
          avg_session_duration_ms?: number | null
          bounce_rate?: number | null
          conversions?: number | null
          created_at?: string | null
          date: string
          id?: string
          impressions?: number | null
          keyword: string
          revenue?: number | null
          sessions?: number | null
          source?: string | null
        }
        Update: {
          avg_scroll_depth?: number | null
          avg_session_duration_ms?: number | null
          bounce_rate?: number | null
          conversions?: number | null
          created_at?: string | null
          date?: string
          id?: string
          impressions?: number | null
          keyword?: string
          revenue?: number | null
          sessions?: number | null
          source?: string | null
        }
        Relationships: []
      }
      leads: {
        Row: {
          ab_variant: string | null
          business_name: string | null
          created_at: string
          email: string
          id: string
          lead_type: string | null
          notes: string | null
          phone: string | null
          session_id: string | null
          source_cta: string | null
          source_page: string | null
          status: string | null
        }
        Insert: {
          ab_variant?: string | null
          business_name?: string | null
          created_at?: string
          email: string
          id?: string
          lead_type?: string | null
          notes?: string | null
          phone?: string | null
          session_id?: string | null
          source_cta?: string | null
          source_page?: string | null
          status?: string | null
        }
        Update: {
          ab_variant?: string | null
          business_name?: string | null
          created_at?: string
          email?: string
          id?: string
          lead_type?: string | null
          notes?: string | null
          phone?: string | null
          session_id?: string | null
          source_cta?: string | null
          source_page?: string | null
          status?: string | null
        }
        Relationships: []
      }
      lexikon_article_links: {
        Row: {
          article_slug: string
          article_title: string
          created_at: string | null
          id: string
          link_type: string | null
          relevance_score: number | null
          term_name: string
          term_slug: string
          updated_at: string | null
        }
        Insert: {
          article_slug: string
          article_title: string
          created_at?: string | null
          id?: string
          link_type?: string | null
          relevance_score?: number | null
          term_name: string
          term_slug: string
          updated_at?: string | null
        }
        Update: {
          article_slug?: string
          article_title?: string
          created_at?: string | null
          id?: string
          link_type?: string | null
          relevance_score?: number | null
          term_name?: string
          term_slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      lexikon_sync_log: {
        Row: {
          articles_scanned: number | null
          duration_ms: number | null
          error_message: string | null
          id: string
          links_updated: number | null
          new_links_created: number | null
          run_at: string | null
          status: string | null
          terms_processed: number | null
        }
        Insert: {
          articles_scanned?: number | null
          duration_ms?: number | null
          error_message?: string | null
          id?: string
          links_updated?: number | null
          new_links_created?: number | null
          run_at?: string | null
          status?: string | null
          terms_processed?: number | null
        }
        Update: {
          articles_scanned?: number | null
          duration_ms?: number | null
          error_message?: string | null
          id?: string
          links_updated?: number | null
          new_links_created?: number | null
          run_at?: string | null
          status?: string | null
          terms_processed?: number | null
        }
        Relationships: []
      }
      optimized_elements: {
        Row: {
          created_at: string
          element_id: string
          element_type: string
          id: string
          locked_until: string | null
          test_history: Json
          updated_at: string
          winning_value: string
        }
        Insert: {
          created_at?: string
          element_id: string
          element_type: string
          id?: string
          locked_until?: string | null
          test_history?: Json
          updated_at?: string
          winning_value: string
        }
        Update: {
          created_at?: string
          element_id?: string
          element_type?: string
          id?: string
          locked_until?: string | null
          test_history?: Json
          updated_at?: string
          winning_value?: string
        }
        Relationships: []
      }
      partner_applications: {
        Row: {
          country: string | null
          created_at: string | null
          email: string
          full_name: string
          id: string
          message: string | null
          preferred_method: string | null
          sales_experience: string | null
          status: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string | null
          email: string
          full_name: string
          id?: string
          message?: string | null
          preferred_method?: string | null
          sales_experience?: string | null
          status?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string | null
          email?: string
          full_name?: string
          id?: string
          message?: string | null
          preferred_method?: string | null
          sales_experience?: string | null
          status?: string | null
        }
        Relationships: []
      }
      questionnaire_responses: {
        Row: {
          created_at: string
          customer_id: string
          id: string
          response_data: Json
          step_key: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          customer_id: string
          id?: string
          response_data?: Json
          step_key: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          customer_id?: string
          id?: string
          response_data?: Json
          step_key?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "questionnaire_responses_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      scheduled_posts: {
        Row: {
          created_at: string | null
          id: string
          published_at: string | null
          scheduled_at: string
          slug: string
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          published_at?: string | null
          scheduled_at: string
          slug: string
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          published_at?: string | null
          scheduled_at?: string
          slug?: string
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      uploaded_assets: {
        Row: {
          asset_type: string
          created_at: string
          customer_id: string
          file_name: string | null
          id: string
          storage_path: string
        }
        Insert: {
          asset_type: string
          created_at?: string
          customer_id: string
          file_name?: string | null
          id?: string
          storage_path: string
        }
        Update: {
          asset_type?: string
          created_at?: string
          customer_id?: string
          file_name?: string | null
          id?: string
          storage_path?: string
        }
        Relationships: [
          {
            foreignKeyName: "uploaded_assets_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      blog_article_stats: {
        Row: {
          article_slug: string | null
          article_title: string | null
          avg_engagement_score: number | null
          avg_reading_time: number | null
          avg_scroll_depth: number | null
          completion_rate: number | null
          finished_count: number | null
          first_view: string | null
          last_view: string | null
          total_views: number | null
          unique_visitors: number | null
          views_month: number | null
          views_today: number | null
          views_week: number | null
        }
        Relationships: []
      }
      latest_internal_linking_audits: {
        Row: {
          article_slug: string | null
          article_title: string | null
          audit_date: string | null
          audit_score: number | null
          created_at: string | null
          has_pillar_link: boolean | null
          hub_category: string | null
          id: string | null
          is_orphan_page: boolean | null
          link_density: number | null
          missing_pillar_links: Json | null
          missing_sibling_links: Json | null
          pillar_link_count: number | null
          primary_hub: string | null
          recommendations: Json | null
          sibling_links_count: number | null
          total_outbound_links: number | null
          updated_at: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
      business_category:
        | "gastronomy"
        | "beauty_wellness"
        | "crafts"
        | "health"
        | "retail"
        | "fitness"
        | "services"
        | "legal"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
      business_category: [
        "gastronomy",
        "beauty_wellness",
        "crafts",
        "health",
        "retail",
        "fitness",
        "services",
        "legal",
      ],
    },
  },
} as const
