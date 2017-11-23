export interface PackageDescription {
  name: string;
  hasTestingModule: boolean;
}

export interface Config {
  packages: PackageDescription[];
  scope: string;
}

export const packages: PackageDescription[] = [
  {
    name: 'mylib',
    hasTestingModule: false,
  },
];

export const NAMESPACE_LIB = '@nglib';
