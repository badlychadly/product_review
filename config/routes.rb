Rails.application.routes.draw do

  root 'static#welcome'


  resources :users, except: [:index]

  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'

end


