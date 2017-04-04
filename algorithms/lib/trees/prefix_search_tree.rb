# I wrote this to simplify text search

class PrefixTree
  attr_accessor :root
  class Node
    attr_accessor :count, :data

    def initialize
      @data = {}
      @count = 0
    end

    def add_letter_node(letter)
      if letter =~ /[a-zA-Z]/
        lower = letter.downcase
        @data[lower] ||= Node.new
        @data[lower].count += 1
        @data[lower]
      else
        nil
      end
    end

    def find_letter_node(letter)
      @data[letter.downcase]
    end
  end

  def initialize
    @root = Node.new
  end

  def process(string)
    current_node = @root
    string.each_char do |char|
      if char =~ /[a-zA-Z]/
        current_node = current_node.add_letter_node(char)
      else
        current_node = @root
      end
    end
  end

  def has_word?(word)
    current_node = @root
    word.each_char do |char|
      if !current_node || !(current_node = current_node.find_letter_node(char.downcase))
        return false
      end
    end

    true
  end

  def word_count(word)
    current_node = @root
    word.each_char do |char|
      if !current_node || !(current_node = current_node.find_letter_node(char.downcase))
        return 0
      end
    end

    current_node.count
  end
end

# search_tree = PrefixTree.new
# search_tree.process("Rem id illo ducimus qui temporibus omnis quasi. Sit omnis beatae optio consectetur cum reprehenderit. Blanditiis asperiores repellendus dolor consequuntur eaque suscipit illo. Sed sint quia autem culpa enim ut repellendus. Mollitia maiores est consequatur veniam.\n\nDolorem enim soluta voluptas voluptatum ex qui. Facilis sequi facere laboriosam itaque delectus. Quae quos eius.\n\nConsequatur sed velit eligendi aspernatur ullam. Commodi soluta cupiditate animi facilis. Ducimus beatae iusto laborum. Expedita non quo qui. Autem rem hic maiores.\n\nAut deleniti eos occaecati. Veritatis aliquam sed esse unde aspernatur. Aut repellat ullam rerum nihil. Harum eligendi vel quo voluptas.\n\nQui laborum molestiae rerum quia vel. Quia sit earum voluptatibus molestiae porro explicabo. Et pariatur aut quia reprehenderit. Distinctio optio eum voluptas.\n\nUt eveniet iste doloremque quia magni quisquam. In maxime ut sed debitis omnis. Sint sequi et laudantium architecto sunt quas.\n\nDeserunt accusamus quod dolores et. Atque eos molestias. Expedita quis inventore.")
# search_tree.has_word?('sit')
