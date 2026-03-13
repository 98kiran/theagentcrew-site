# Deploy Guard: Astro Asset Isolation

## Policy: Separate roots for production and staging

Production and staging must never share a build root or `dist/` directory.

- Production root: `/home/kiran/.openclaw/workspace/theagentcrew-prod`
- Staging root: `/home/kiran/.openclaw/workspace/theagentcrew-staging-site`

PM2 must run each app from its matching root:

- `theagentcrew-site` -> prod root -> `dist/server/entry.mjs`
- `theagentcrew-staging` -> staging root -> `dist/server/entry.mjs`

This prevents hashed Astro assets from one environment invalidating the other.

## Mandatory post-deploy check

After every deploy (both prod and staging), run the Astro asset verifier.

```bash
/home/kiran/.openclaw/workspace/scripts/verify-astro-assets.sh https://theagentcrew.org/products
BASIC_AUTH='kiran:staging2026' /home/kiran/.openclaw/workspace/scripts/verify-astro-assets.sh https://staging.theagentcrew.org/products
```

Deployment is not complete unless both checks return `RESULT: PASS`.
