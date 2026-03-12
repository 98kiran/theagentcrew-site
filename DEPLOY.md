# Deploy Workflow

## Staging deploy

1. Push changes to `staging` branch.
2. On server:
   ```bash
   cd /home/kiran/.openclaw/workspace/theagentcrew-site && git checkout staging && git pull && rm -rf .next && npm run build && pm2 restart theagentcrew-staging
   ```
3. Review at: https://staging.theagentcrew.org
   - Username: `kiran`
   - Password: `staging2026`

## Promote staging to production

If staging is approved:

```bash
git checkout master && git merge staging && git push && rm -rf .next && npm run build && pm2 restart theagentcrew-site
```
