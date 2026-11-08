#!/bin/bash
# Build Option C for the client's live domain and deploy to Cloudflare Pages.
#   bash scripts-build-live.sh            (build + deploy)
#   bash scripts-build-live.sh --no-deploy
# Staging stays on astro.config.mjs (site staging.tideloc.com.au, base /cold/.../v3).
set -euo pipefail
cd "$(dirname "$0")"
SITE=https://murphysplumbingservices.com.au
PROJECT=murphys-plumbing-services
PUBLIC_LIVE=1 npx astro build --site "$SITE" --base /
# robots.txt is shared with staging; point its sitemap at the live domain.
sed -i '' "s#^Sitemap: .*#Sitemap: $SITE/sitemap-index.xml#" dist/robots.txt
if [ "${1:-}" != "--no-deploy" ]; then
  CLOUDFLARE_ACCOUNT_ID=92ace353bdf27fc1335449186dc25f5e \
  CLOUDFLARE_API_TOKEN=$(cat ~/.config/tideloc/cloudflare-pages-token) \
  source ~/.nvm/nvm.sh && nvm use 24 >/dev/null && npx wrangler pages deploy dist --project-name "$PROJECT" --branch main --commit-dirty=true
fi
