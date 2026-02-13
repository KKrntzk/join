import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class Supabase {
  supabaseClient: SupabaseClient;

  constructor() {
    this.supabaseClient = createClient(
      'https://ndtlhvbchxbiuaftuowb.supabase.co',
      'sb_publishable_WuxJeCPnwQLmUudBbPIw8A_Ch0Wc3NV',
    );
  }
}
