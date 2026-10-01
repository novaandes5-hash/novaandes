# NovaAndes 배포 가이드

## 준비된 파일
`deploy/` 폴더에 사이트 전체 파일이 준비되어 있음:
- `index.html` - 홈페이지
- `app.js` - 상품 데이터 (75개 공개 상품, 업데이트됨)
- `style.css`, `product-layout.css` - 스타일
- `img/` - 상품 이미지
- `productos/` - 상품 상세 페이지 (75개)
- `catalog-public.json`, `products.xml`, `sitemap.xml` - 피드/사이트맵
- `wrangler.toml` - Wrangler 설정

## 배포 방법 (Wrangler)

1. Node.js가 설치된 컴퓨터에서:
   ```bash
   npm install -g wrangler
   ```

2. `deploy/` 폴더로 이동:
   ```bash
   cd deploy/
   ```

3. Cloudflare 로그인:
   ```bash
   wrangler login
   ```
   (브라우저가 열리면 Cloudflare 계정으로 로그인)

4. 배포:
   ```bash
   wrangler deploy
   ```

## 주의사항
- 배포 전 `https://novaandes.ec/` 에서 현재 사이트가 정상인지 확인
- 배포 후 새 버전 번호 확인
- 상품 수 (75개), 이미지, 가격이 올바른지 확인
