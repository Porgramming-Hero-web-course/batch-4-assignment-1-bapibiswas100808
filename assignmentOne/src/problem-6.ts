interface Profile {
  name: string;
  age: number;
  email: string;
}
const updateProfile = (profile: Profile, update: Partial<Profile>) => {
  return {
    ...profile,
    ...update,
  };
};
