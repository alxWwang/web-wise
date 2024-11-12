const fetch = require('node-fetch');  // Use fetch for HTTP requests

async function check(url) {
  try {
    // 1. Check Domain Age (Placeholder for WHOIS API)
    // const domainAge = await checkDomainAge(url);
    // if (domainAge < 30) {  // For example, 30 days as a threshold for new domains
    //   console.warn("Warning: This domain is very new and could be risky.");
    //   return false;
    // }

    // 2. Check URL Reputation (Placeholder for Reputation API)
    // const isReputable = await checkUrlReputation(url);
    // if (!isReputable) {
    //   console.warn("Warning: This URL has a poor reputation and could be dangerous.");
    //   return false;
    // }

    // 3. SSL Certificate Validation
    const sslValid = await checkSSL(url);
    if (!sslValid) {
      console.warn("Warning: The SSL certificate for this URL is invalid or expired.");
      return false;
    }

    // 4. Content Analysis with NLP (Basic)
    const contentSafe = await analyzeContent(url);
    if (!contentSafe) {
      console.warn("Warning: This website contains suspicious content.");
      return false;
    }

    console.log("The URL passed all checks and appears safe.");
    return true;
  } catch (error) {
    console.error("Error while checking the URL:", error);
    return false;
  }
}

// Placeholder for checking domain age (requires WHOIS API)
async function checkDomainAge(url) {
  const domain = new URL(url).hostname;
  // Call WHOIS API here, e.g., whoisxmlapi.com
  // Simulate a WHOIS check response
  const domainAgeInDays = 45;  // Mock response
  return domainAgeInDays;
}

// Placeholder for URL Reputation Check (requires URL Reputation API)
async function checkUrlReputation(url) {
  // Call a reputation API here, e.g., Google Safe Browsing or VirusTotal
  // Simulate an API response
  const isReputable = true;  // Mock response
  return isReputable;
}

// SSL Certificate Validation
async function checkSSL(url) {
  try {
    const response = await fetch(url);
    const cert = response.url.startsWith('https') ? response.url : null;
    if (!cert) return false;  // No SSL certificate found

    const certDetails = response.headers.get('strict-transport-security');
    if (!certDetails) return false;  // No certificate details found

    // Basic SSL validation passed
    return true;
  } catch (error) {
    console.error("SSL validation error:", error);
    return false;
  }
}

// Simple NLP Analysis for Suspicious Content (Basic Patterns)
async function analyzeContent(url) {
  try {
    const response = await fetch(url);
    const text = await response.text();

    // Basic keywords associated with phishing or scams
    const suspiciousKeywords = ["urgent", "act now", "limited time", "login", "verify account", "congratulations", "click here", "invest"];
    const textLower = text.toLowerCase();

    // Check if the text contains any suspicious keywords
    for (let keyword of suspiciousKeywords) {
      if (textLower.includes(keyword)) {
        return false;  // Found a suspicious pattern
      }
    }

    // No suspicious patterns found
    return true;
  } catch (error) {
    console.error("Error analyzing content:", error);
    return false;
  }
}

// Example usage:
check("https://example.com")
  .then(result => console.log("URL Safety Check Result:", result ? "Safe" : "Unsafe"))
  .catch(error => console.error("Error during check:", error));


