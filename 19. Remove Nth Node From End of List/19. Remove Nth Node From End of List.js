/*
 * Problem: 19. Remove Nth Node From End of List
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/1912388550/
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(!head ) {
        return head;
    }
    let total = 0;
    let curr = head;
    let before = head;
    let beforePos = 0;

    while(curr) {
        total++;
        if(total - beforePos > n+1 ) {
            before = before.next;
            beforePos++;
        }
        curr = curr.next;
    }
    if(total == n) {
        return head.next;
    } 
    if(total > n) {
        let next = before.next;
        before.next = next.next;
        next.next = null;
    }
    return head;
    
};
