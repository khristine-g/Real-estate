Rails.application.routes.draw do
 
  resources :listings, only: [:index, :show]
  resources :agents, only: [:index, :show]

end
