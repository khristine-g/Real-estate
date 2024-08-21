class ListingsController < ApplicationController
    def index
      @listings = Listing.includes(:images).all
      render json: @listings.to_json(include: :images)
    end
  
    def show
      @listing = Listing.includes(:images).find(params[:id])
      render json: @listing.to_json(include: :images)
    end
  end
  