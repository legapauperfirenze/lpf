/* ============ Impostazioni del sito della Lega Pauper Firenze ============
   Modifica solo i valori tra virgolette, poi salva (su GitHub: "Commit changes"). */
window.LPF_CONFIG = {
  /* Database online Supabase: Project Settings → API (o "Connect").
     Lasciali vuoti ("") per usare solo il file dati.json. */
  supabaseUrl: "",      // esempio: "https://abcdefghijk.supabase.co"
  supabaseKey: "",      // la chiave "anon public" oppure "publishable" (sb_publishable_...)

  /* PIN dell'area staff, usato SOLO quando il database non è collegato.
     Con il database collegato si entra con email e password. */
  staffPin: "lpf",

  /* Modello usato per leggere le foto (con la chiave API che ogni membro dello staff
     inserisce nel proprio browser, nella scheda Importa). */
  aiModel: "claude-sonnet-5-5"
};
