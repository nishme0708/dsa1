/*
 * Problem: 234. Palindrome Linked List
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/palindrome-linked-list/submissions/1912342406/
 * Language: javascript
 * Date: 2026-02-08
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

 function reverse(node) {
   
    let prev = null;
    while(node) {
        let next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    
    return prev;
 }
var isPalindrome = function(head) {
    let slow = head; 
    let fast = head;
    while(fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    if(fast && fast.next) {
        fast = fast.next;
    }
    let newHead = reverse(slow.next);
    let palin = true;
    let left = head;
    let right = newHead;
    while(right) {
       
        if(left.val != right.val) {
            palin = false;
            break;
        }
        left=left.next;
        right = right.next;
    }
    reverse(slow.next);
    return palin;
};
