(ns ai.core
  (:require [clojure.java.io :as io]
            [environ.core :refer [env]]
            [muuntaja.middleware :as muuntaja]
            [reitit.ring :as ring]
            [ring.adapter.jetty :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.util.http-response :as response]))

(defn html-handler [request-map]
  (response/ok
   (str "<html><body> your IP is: "
        (:remote-addr request-map)
        "</body></html")))

(defn json-handler [request]
  (response/ok
    {:result (get-in request [:body-params :id])}))

(defn wrap-nocache [handler]
  (fn [request]
    (-> request
        handler
        (assoc-in [:headers "Pragma"] "no-cache"))))

(defn wrap-formats [handler]
  (-> handler
      (muuntaja/wrap-format)))

(def routes
  [["/" {:get html-handler}]])

(def handler 
  (ring/ring-handler
    (ring/router routes)))

;; (defn index-handler [_]
;;   {:status 200
;;    :headers {"Content-Type" "text/html"}
;;    :body (slurp (io/resource "public/index.html"))})



;; (def app 
;;   (ring/ring-handler
;;     (ring/router
;;       [["/"] {:get index-handler}])))

(defn -main [& _]
  (jetty/run-jetty 
    (-> #'handler 
        wrap-nocache 
        wrap-formats
        wrap-reload) 
    {:port (or (env :port) 8910) 
     :join? false}))
  
