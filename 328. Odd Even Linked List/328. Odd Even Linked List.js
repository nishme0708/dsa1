/*
 * Problem: 328. Odd Even Linked List
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/odd-even-linked-list/submissions/1912372807/
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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head || !head.next || !head.next.next) {
        return head;
    }
    let curr = head;
    let even = head.next;
    while(curr && curr.next && curr.next.next) {
        let next = curr.next;
        curr.next = next.next;
        next.next = curr.next.next;
        curr = curr.next;
    }
    curr.next = even;
    return head;
};
