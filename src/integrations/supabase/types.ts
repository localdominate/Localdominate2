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
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      analytics_conversions: {
        Row: {
          ab_variant_color: string | null
          ab_variant_restaurant: string | null
          amount: number | null
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
          ab_variant_color?: string | null
          ab_variant_restaurant?: string | null
          amount?: number | null
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
          ab_variant_color?: string | null
          ab_variant_restaurant?: string | null
          amount?: number | null
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
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      business_category:
        | "gastronomy"
        | "beauty_wellness"
        | "crafts"
        | "health"
        | "retail"
        | "fitness"
        | "services"
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
      business_category: [
        "gastronomy",
        "beauty_wellness",
        "crafts",
        "health",
        "retail",
        "fitness",
        "services",
      ],
    },
  },
} as const
