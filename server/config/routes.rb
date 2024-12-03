Rails.application.routes.draw do
   # Allow HEAD request to root
   root to: -> { [200, {}, ['']] }
 
  resources :listings, only: [:index, :show]
  resources :agents, only: [:index, :show]

end
