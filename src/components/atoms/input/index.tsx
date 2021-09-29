import * as S from './styles'

interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  placeholder?: string
  children:
    | React.ReactElement<typeof Option>[]
    | React.ReactElement<typeof Option>
}

interface IOptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode
}

const Option = ({ children, ...rest }: IOptionProps) => (
  <option {...rest}>{children}</option>
)

export const Select = ({
  label,
  name,
  placeholder,
  children,
  ...rest
}: ISelectProps) => (
  <S.Container>
    <label htmlFor={name}>{label}</label>
    <select {...rest} name={name}>
      {placeholder && (
        <Option value="" disabled selected>
          {placeholder}
        </Option>
      )}
      {children}
    </select>
  </S.Container>
)

Select.Option = Option
