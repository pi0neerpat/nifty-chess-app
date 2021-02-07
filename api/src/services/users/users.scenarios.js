export const standard = defineScenario({
  user: {
    one: { address: 'String', authDetail: { create: { nonce: 'String' } } },
    two: { address: 'String', authDetail: { create: { nonce: 'String' } } },
  },
})
