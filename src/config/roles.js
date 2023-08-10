const allRoles = {
  candidate: [
    'manageCandidateProfile',
    'getSkills',
    'getCandidateProfile',
    'getIndustry',
    'manageCandidateProfile',
    'getS3SignedUrl',
    'manage_opportunities',
    'get_opportunities',
    'get_opportunity',
    'manage_opportunity',
    'user_get_all_jobs',
    'user_get_job',
    'user_manage_document',
    'user_get_document',
  ],
  business: [
    'manage_opportunities',
    'get_opportunities',
    'get_opportunity',
    'manage_opportunity',
    'user_get_all_jobs',
    'user_get_job',
    'manageSchedules',
    'getSchedules',
    'manageNotes',
    'getNotes',
    'getInterview',
  ],
  admin: [
    'getUsers',
    'manageUsers',
    'getSkills',
    'manageSkills',
    'manageIndustry',
    'getIndustry',
    'getS3SignedUrl',
    'getCandidateProfile',
    'manageCandidateProfile',
    'getJobTemplate',
    'manageJobTemplate',
    'manageScreeningProfile',
    'getScreeningProfile',
    'manageInterview',
    'getInterview',
    'user_manage_business',
    'user_get_business',
    'user_manage_job',
    'user_get_all_jobs',
    'user_get_job',
    'user_create_proposal',
    'user_get_proposal',
    'user_update_proposal',
    'user_delete_proposal',
    'user_get_all_proposal',
    'admin_register_business',
    'admin_candidate_register',
    'manage_opportunities',
    'get_opportunities',
    'get_opportunity',
    'manage_opportunity',
    'manageSchedules',
    'getSchedules',
    'manageNotes',
    'getNotes',
    'getInterview',
    'user_manage_document',
    'user_get_document',
    'user_get_dashboard',
    'user_delete_document',
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};