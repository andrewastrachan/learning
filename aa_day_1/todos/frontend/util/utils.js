// Helper to generate a todo id (key). Normally the DB would do this
// TODO: remove when connecting to backend
export const uniqueId = () => new Date().getTime()
