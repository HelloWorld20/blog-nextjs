import Script from 'next/script';

const google_analytics_id = 'UA-175169156-1';

export default function Analytics() {
  const isProduct = process.env.NODE_ENV === 'production';
  if (!isProduct) return null;
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${google_analytics_id}`}
      />

      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${google_analytics_id}', {
          page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
