# O(N) time and O(N) space
def is_palindrome?(n)
  r1, r2 = n, n #r1 is slow, r2 is fast
  # This is going to be a linked list
  # But might want to impelement using a stack
  first_half = nil

  while r2 && r2.next
    first_half_next = first_half
    first_half = SinglyLinkedList::Node.new(r1.data)
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
