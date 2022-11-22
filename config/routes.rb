Rails.application.routes.draw do
  root "members#index"
  get "top" => "top#index", as: "top"

  resources :members do
    get "search", on: :collection
  end

  resource :session, only: [:create, :destroy]
end
