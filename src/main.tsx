import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Sentry.init({
//   dsn: "https://cedeca19ba9aa3b5ebeb13e76fd400c1@o4507203279519744.ingest.de.sentry.io/4507203282665552",
//   integrations: [
//     Sentry.browserTracingIntegration(),
//     Sentry.metrics.metricsAggregatorIntegration(),
//     Sentry.reactRouterV6BrowserTracingIntegration({
//       useEffect: React.useEffect,
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     } as Partial<BrowserTracing> & Record<string, any>),
//     Sentry.replayIntegration({
//       maskAllText: false,
//       blockAllMedia: false,
//     }),
//   ],
//   tracesSampleRate: 1.0,
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
// });

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
