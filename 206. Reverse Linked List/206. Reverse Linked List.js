/*
 * Problem: 206. Reverse Linked List
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/reverse-linked-list/
 * Language: javascript
 * Date: 2026-02-07
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(head == null) {
        return null;
    }
    let curr = head
    let prev = null;
    while(curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

   reverseList1(head) {
        if(head == null) {
            return null;
        }
        if(head.next == null) {
            return head;
        }
        let nhead = reverseList1(head.next);
        // this is genius move using the same pointer to control the next one.
        head.next.next = head;
        head.next = null;
        return nhead;
    }
