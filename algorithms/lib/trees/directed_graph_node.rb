module DirectedGraph
  class Node
    attr_reader :data, :children, :visited

    def initialize(data)
      @data     = data
      @children = []
      @visited  = false
    end

    def visit
      @visited = true
    end

    def append_child_data(data)
      node = Node.new(data)
      @children << node
      node
    end

    def append_child_node(node)
      @children << node
      node
    end
  end
end
