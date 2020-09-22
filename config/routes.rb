Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]

    resources :tracks, except: [:new, :edit]

    # here annotations belong to a tracks so we want them nested
    # resulting route will be:
    # get 'tracks/1/annotations'
    # getting all the annotations for the track

    # resources :tracks, except: [:new, :edit] do
    #   resources :annotations, only: [:index]
    # end
    
    resources :annotations, except: [:index]
  end
end
