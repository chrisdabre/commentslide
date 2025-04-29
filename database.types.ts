export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      Automation: {
        Row: {
          active: boolean
          createdAt: string
          id: string
          name: string
          userId: string | null
        }
        Insert: {
          active?: boolean
          createdAt?: string
          id?: string
          name?: string
          userId?: string | null
        }
        Update: {
          active?: boolean
          createdAt?: string
          id?: string
          name?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Automation_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Dms: {
        Row: {
          automationId: string | null
          createdAt: string
          id: string
          message: string | null
          receiver: string | null
          senderId: string | null
        }
        Insert: {
          automationId?: string | null
          createdAt?: string
          id?: string
          message?: string | null
          receiver?: string | null
          senderId?: string | null
        }
        Update: {
          automationId?: string | null
          createdAt?: string
          id?: string
          message?: string | null
          receiver?: string | null
          senderId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Dms_automationId_fkey"
            columns: ["automationId"]
            isOneToOne: false
            referencedRelation: "Automation"
            referencedColumns: ["id"]
          },
        ]
      }
      Integrations: {
        Row: {
          createdAt: string
          expiresAt: string | null
          id: string
          instagramId: string | null
          name: Database["public"]["Enums"]["INTEGRATIONS"]
          token: string
          userId: string | null
        }
        Insert: {
          createdAt?: string
          expiresAt?: string | null
          id?: string
          instagramId?: string | null
          name?: Database["public"]["Enums"]["INTEGRATIONS"]
          token: string
          userId?: string | null
        }
        Update: {
          createdAt?: string
          expiresAt?: string | null
          id?: string
          instagramId?: string | null
          name?: Database["public"]["Enums"]["INTEGRATIONS"]
          token?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Integrations_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Keyword: {
        Row: {
          automationId: string | null
          id: string
          word: string
        }
        Insert: {
          automationId?: string | null
          id?: string
          word: string
        }
        Update: {
          automationId?: string | null
          id?: string
          word?: string
        }
        Relationships: [
          {
            foreignKeyName: "Keyword_automationId_fkey"
            columns: ["automationId"]
            isOneToOne: false
            referencedRelation: "Automation"
            referencedColumns: ["id"]
          },
        ]
      }
      Listener: {
        Row: {
          automationId: string
          commentCount: number
          commentReply: string | null
          dmCount: number
          id: string
          listener: Database["public"]["Enums"]["LISTENERS"]
          prompt: string
        }
        Insert: {
          automationId: string
          commentCount?: number
          commentReply?: string | null
          dmCount?: number
          id?: string
          listener?: Database["public"]["Enums"]["LISTENERS"]
          prompt: string
        }
        Update: {
          automationId?: string
          commentCount?: number
          commentReply?: string | null
          dmCount?: number
          id?: string
          listener?: Database["public"]["Enums"]["LISTENERS"]
          prompt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Listener_automationId_fkey"
            columns: ["automationId"]
            isOneToOne: false
            referencedRelation: "Automation"
            referencedColumns: ["id"]
          },
        ]
      }
      Post: {
        Row: {
          automationId: string | null
          caption: string | null
          id: string
          media: string
          mediaType: Database["public"]["Enums"]["MEDIATYPE"]
          postId: string
        }
        Insert: {
          automationId?: string | null
          caption?: string | null
          id?: string
          media: string
          mediaType?: Database["public"]["Enums"]["MEDIATYPE"]
          postId: string
        }
        Update: {
          automationId?: string | null
          caption?: string | null
          id?: string
          media?: string
          mediaType?: Database["public"]["Enums"]["MEDIATYPE"]
          postId?: string
        }
        Relationships: [
          {
            foreignKeyName: "Post_automationId_fkey"
            columns: ["automationId"]
            isOneToOne: false
            referencedRelation: "Automation"
            referencedColumns: ["id"]
          },
        ]
      }
      Subscription: {
        Row: {
          createdAt: string
          customerId: string | null
          id: string
          plan: Database["public"]["Enums"]["SUBSCRIPTION_PLAN"]
          updatedAt: string
          userId: string | null
        }
        Insert: {
          createdAt?: string
          customerId?: string | null
          id?: string
          plan?: Database["public"]["Enums"]["SUBSCRIPTION_PLAN"]
          updatedAt?: string
          userId?: string | null
        }
        Update: {
          createdAt?: string
          customerId?: string | null
          id?: string
          plan?: Database["public"]["Enums"]["SUBSCRIPTION_PLAN"]
          updatedAt?: string
          userId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Subscription_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "User"
            referencedColumns: ["id"]
          },
        ]
      }
      Trigger: {
        Row: {
          automationId: string | null
          id: string
          type: string
        }
        Insert: {
          automationId?: string | null
          id?: string
          type: string
        }
        Update: {
          automationId?: string | null
          id?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "Trigger_automationId_fkey"
            columns: ["automationId"]
            isOneToOne: false
            referencedRelation: "Automation"
            referencedColumns: ["id"]
          },
        ]
      }
      User: {
        Row: {
          clerkid: string
          createdAt: string
          email: string
          firstname: string | null
          id: string
          lastname: string | null
        }
        Insert: {
          clerkid: string
          createdAt?: string
          email: string
          firstname?: string | null
          id?: string
          lastname?: string | null
        }
        Update: {
          clerkid?: string
          createdAt?: string
          email?: string
          firstname?: string | null
          id?: string
          lastname?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      INTEGRATIONS: "INSTAGRAM"
      LISTENERS: "SMARTAI" | "MESSAGE"
      MEDIATYPE: "IMAGE" | "VIDEO" | "CAROSEL_ALBUM"
      SUBSCRIPTION_PLAN: "PRO" | "FREE"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      INTEGRATIONS: ["INSTAGRAM"],
      LISTENERS: ["SMARTAI", "MESSAGE"],
      MEDIATYPE: ["IMAGE", "VIDEO", "CAROSEL_ALBUM"],
      SUBSCRIPTION_PLAN: ["PRO", "FREE"],
    },
  },
} as const
