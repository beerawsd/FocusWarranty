const validMultiPost = { 
    ClaimCode: 'admin', 
    Status: 'Approve',
}

const invalidMultiPost = { 
    ClaimCode: 'admin', 
    Status: 'Approve',
}

const waitingApprove = {
    ClaimCode: 'admin', 
    Status: 'Waiting',
}

module.exports = { 
    validMultiPost,
    invalidMultiPost,
    waitingApprove
};