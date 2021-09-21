(ns ai.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]))

(defn user-name [value]
  [:input {:type "text"
           :placeholder "Enter name here"
           :on-change #(reset! value (-> % .-target .-value))}])

(defn greeting []
  (let [value (r/atom "World")]
    (fn []
      [:div 
       [:h1 "Hello, " (if (= @value "") "World" @value) "!"]
       [:p "What is your name? " [user-name value]]])))

(defn query [prompt]
  [:input {:type "text"
           :placeholder "Enter query here"
           :on-change #(reset! prompt (-> % .-target .-value))}])

(defn token-amount [max-tokens]
  [:input {:type "number"
           :placeholder "Number of characters"
           :on-change #(reset! max-tokens (-> % .-target .-value))}])

(defn query-form []
  (let [prompt (r/atom "")
        max-tokens (r/atom 0)]
    (fn []
      [:form {:method "POST"}
       [:h2 "What would you like to ask the magic AI?"]
       [:p "Prompt: " [query prompt]]
       [:p "How many characters for the response: " [token-amount max-tokens]] 
       [:button "Submit"]])))

(defn app []
  [:div.container
   [greeting]
   [query-form]])

(defn ^:export main []
  (rdom/render 
    [app]
    (.getElementById js/document "app")))
