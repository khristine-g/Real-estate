# config/initializers/cors.rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'https://urbanrealty.vercel.app'  # Replace this with your frontend URL
      resource '*',
        headers: :any,
        methods: [:get, :post, :put, :delete, :options, :head],
        credentials: true
    end
  end
  