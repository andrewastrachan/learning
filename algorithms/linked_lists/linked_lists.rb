class Node
  attr_accessor :next, :data

  def initialize(data)
    @data = data
  end

  def append_to_last(data)
    current_node = self

    while current_node.next
      current_node = current_node.next
    end

    new_node = Node.new(data)
    current_node.next = new_node
    self
  end
end

node = Node.new('a')
node.append_to_last('b').append_to_last('c').append_to_last('b').append_to_last('a')

def is_pal?(n)
  r1, r2 = n, n #r1 is slow, r2 is fast
  first_half = nil

  while r2.next
    first_half_next = first_half
    first_half = Node.new(r1.data)
    first_half.next = first_half_next

    r1 = r1.next
    r2 = r2.next.next
  end

  r1 = r1.next if r2 #odd

  while r1
    return false if r1.data != first_half.data
    r1 = r1.next
    first_half = first_half.next
  end

  true
end

is_pal?(node)

node = Node.new('a')
node.append_to_last('z').append_to_last('b').append_to_last('b').append_to_last('z').append_to_last('a')

def is_pal_recursive?(node, length)
  if length == 0
    return node # even
  elsif length == 1
    return node.next # odd
  end

  comparison_node = is_pal_recursive?(node.next, length - 2)
  return false unless comparison_node
  p "node: #{node.data} compared with: #{comparison_node.data}"
  return false unless comparison_node.data == node.data

  comparison_node.next ? comparison_node.next : true
end

is_pal_recursive?(node, 6)

