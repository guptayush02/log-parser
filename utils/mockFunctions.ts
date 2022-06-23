export const functionMock = (TriggerHelper: Object, functionName: any) => {
  const createMockFunction = jest
        .spyOn(TriggerHelper, functionName)
        .mockImplementation((result) => (result ? true : false));
}
