Rails.application.routes.draw do
 
  resources :listings, only: [:index, :show]
end
