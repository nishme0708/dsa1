/*
 * Problem: 2095. Delete the Middle Node of a Linked List
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/submissions/1912500299/
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
var deleteMiddle = function(head) {
    if(!head || !head.next) {
        return null;
    }
    if(!head.next.next) {
        head.next = null;
        return head;
    }
    let slow = head;
    let fast = head.next.next;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let next = slow.next;
    slow.next = next.next;
    next.next = null;
    return head;
};
