Rails.application.routes.draw do

  root 'static#welcome'
  
  resources :products do
    resources :reviews, only: [:create, :edit, :update]
  end 
  
  
  


  resources :users, except: [:new, :create]
   
  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

end


