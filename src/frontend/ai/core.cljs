(ns ai.core
  (:require [reagent.dom :as rdom]))

(defn app []
  [:div.container
   [:h1 "Hello world!"]])

(defn ^:export main []
  (rdom/render 
    [app]
    (.getElementById js/document "app")))
               
