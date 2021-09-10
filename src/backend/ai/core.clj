(ns ai.core
  (:require [reitit.ring :as ring]
            [ring.adapter.jetty :as jetty]
            [clojure.java.io :as io])
  (:gen-class))

(defn index-handler [_]
  {:body (slurp (io/resource "public/index.html"))})

(def app 
  (ring/ring-handler
    (ring/router
      [["/"] {:get index-handler}])))

(defn -main [& _]
  (jetty/run-jetty #'app {:port 8910}))
  
