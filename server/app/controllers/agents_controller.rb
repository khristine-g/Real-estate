class AgentsController < ApplicationController
    def index
      agents = Agent.all
      render json: agents
    end
  
    def show
      agent = Agent.find(params[:id])
      render json: agent
    end
  end
  