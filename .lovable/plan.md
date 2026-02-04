

## Plan: Google Consent Mode V2 fuer EU-Raum implementieren

### Problemanalyse

**Aktuelles Problem:**
Das Google Analytics Tag wird in Zeile 4-11 der `index.html` **sofort geladen**, bevor der Nutzer seine Einwilligung geben kann. Das ist nicht DSGVO-konform fuer den EU-Raum.

**Loesung:**
Implementierung des **Google Consent Mode V2** mit regionenspezifischen Standardeinstellungen. Dies ist die von Google empfohlene Methode fuer DSGVO-konforme Tracking-Implementierung.

---

### Phase 1: Google Consent Mode Defaults setzen (index.html)

**Aenderung:** VOR dem Google Tag muss der Consent Mode mit restriktiven Standardwerten fuer EU/EWR-Regionen initialisiert werden.

**Vorher (Zeile 4-11):**
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-BS2B48THVM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-BS2B48THVM');
</script>
```

**Nachher:**
```html
<!-- Google Consent Mode V2 - Default Settings -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  
  // Set default consent to denied for EU regions
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted',
    'wait_for_update': 500,
    'region': ['AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 
               'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 
               'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'CH', 'GB', 'NO', 'IS', 'LI']
  });
  
  // Allow all for non-EU regions
  gtag('consent', 'default', {
    'ad_storage': 'granted',
    'ad_user_data': 'granted',
    'ad_personalization': 'granted',
    'analytics_storage': 'granted',
    'functionality_storage': 'granted',
    'personalization_storage': 'granted',
    'security_storage': 'granted'
  });
  
  // Check for existing consent
  (function() {
    var consent = localStorage.getItem('cookieConsent');
    if (consent === 'all') {
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted',
        'functionality_storage': 'granted',
        'personalization_storage': 'granted'
      });
    }
  })();
</script>

<!-- Google tag (gtag.js) - loads AFTER consent defaults -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-BS2B48THVM"></script>
<script>
  gtag('js', new Date());
  gtag('config', 'G-BS2B48THVM', {
    'anonymize_ip': true,
    'allow_google_signals': false,
    'allow_ad_personalization_signals': false
  });
</script>
```

---

### Phase 2: Cookie Banner mit Consent Update erweitern (CookieBanner.tsx)

**Aenderungen:**
1. Consent Mode Update bei Zustimmung ausfuehren
2. Granulare Optionen hinzufuegen (optional)
3. Consent-Status persistent speichern

```typescript
const handleAcceptAll = () => {
  localStorage.setItem("cookieConsent", "all");
  localStorage.setItem("cookieConsentTimestamp", new Date().toISOString());
  
  // Update Google Consent Mode
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted',
      'functionality_storage': 'granted',
      'personalization_storage': 'granted'
    });
  }
  
  // Push consent event to dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_update",
    consent_analytics: true,
    consent_marketing: true
  });
  
  setIsVisible(false);
};

const handleAcceptEssential = () => {
  localStorage.setItem("cookieConsent", "essential");
  localStorage.setItem("cookieConsentTimestamp", new Date().toISOString());
  
  // Keep consent denied (default)
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag('consent', 'update', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied',
      'analytics_storage': 'denied',
      'functionality_storage': 'granted',
      'personalization_storage': 'denied'
    });
  }
  
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "consent_update",
    consent_analytics: false,
    consent_marketing: false
  });
  
  setIsVisible(false);
};
```

---

### Phase 3: TypeScript-Deklarationen erweitern

**Datei:** `src/components/CookieBanner.tsx`

```typescript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
```

---

### Phase 4: Veralteten loadGA4-Code entfernen (index.html)

Der alte Code am Ende der Datei (Zeile 495-524) wird entfernt, da der Consent Mode das Laden von GA4 automatisch steuert.

---

### Phase 5: Datenschutzseite aktualisieren (optional)

Die Datenschutzseite sollte um Informationen zum Consent Mode ergaenzt werden:

- Erklaerung des Google Consent Mode V2
- Welche Daten bei "verweigert" trotzdem (anonymisiert) erfasst werden
- Hinweis auf Modellierungsfunktion von Google

---

### Technische Details

**Wie funktioniert Google Consent Mode V2?**

```text
+-------------------+     +------------------+     +-------------------+
|  Seite laeuft     |     |  Cookie Banner   |     |  GA4 Tracking     |
|  (EU-Besucher)    | --> |  wird angezeigt  | --> |  je nach Consent  |
+-------------------+     +------------------+     +-------------------+
        |                        |                        |
        v                        v                        v
   consent=denied          User waehlt            analytics_storage
   (Standard fuer EU)      "Alle akzeptieren"    = granted
                                 |
                                 v
                           gtag('consent',
                           'update', {...})
```

**Vorteile dieser Implementierung:**

1. **DSGVO-konform**: Kein Tracking vor Einwilligung im EU-Raum
2. **Regionenspezifisch**: Nicht-EU-Besucher werden normal getrackt
3. **Conversion Modeling**: Google kann trotzdem Conversions modellieren
4. **Zukunftssicher**: Consent Mode V2 ist ab Maerz 2024 Pflicht fuer Google Ads

**Betroffene Dateien:**
- `index.html` - Consent Mode Defaults und GA4 Konfiguration
- `src/components/CookieBanner.tsx` - Consent Update Logik

