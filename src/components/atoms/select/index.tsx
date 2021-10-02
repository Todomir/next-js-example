import * as S from './styles'

interface ISelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  placeholder?: string
  value: string
  children:
    | React.ReactElement<typeof Option>[]
    | React.ReactElement<typeof Option>
}

interface IOptionProps extends React.HTMLAttributes<HTMLOptionElement> {
  value: string
  children: React.ReactNode
}

const Option = ({ children, value, ...rest }: IOptionProps) => (
  <option value={value} {...rest}>
    {children}
  </option>
)

export const Select = ({
  name,
  label,
  placeholder,
  children,
  value,
  ...rest
}: ISelectProps) => (
  <S.Container>
    <S.Label htmlFor={name}>{label}</S.Label>
    <S.Select {...rest} value={value}>
      {placeholder && (
        <option value="" selected disabled>
          {placeholder}
        </option>
      )}
      {children}
    </S.Select>
  </S.Container>
)

Select.Option = Option
