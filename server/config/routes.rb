Rails.application.routes.draw do
  get 'render/index'
   # Allow HEAD request to root
 
 
  resources :listings, only: [:index, :show]
  resources :agents, only: [:index, :show]

    root "render#index"

end
