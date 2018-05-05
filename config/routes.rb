Rails.application.routes.draw do

  root 'static#welcome'


  resources :users, except: [:new, :create]
  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'

end


